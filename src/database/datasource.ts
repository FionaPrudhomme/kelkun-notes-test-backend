import 'dotenv/config'
import { DataSource, DataSourceOptions } from 'typeorm'
import { ConfigService } from '@nestjs/config'
import * as entities from './entities'

/**
 * Export utilisé dans AppModule avec TypeOrmModule.forRootAsync()
 */
export const dataSourceOptionsFactory = () => {
  return {
    inject: [ConfigService],
    imports: [],
    useFactory: (config: ConfigService): DataSourceOptions => ({
      type: 'postgres',
      host: config.get<string>('POSTGRES_HOST'),
      port: config.get<number>('POSTGRES_PORT'),
      username: config.get<string>('POSTGRES_USER'),
      password: config.get<string>('POSTGRES_PASSWORD'),
      database: config.get<string>('POSTGRES_DB'),
      entities: Object.values(entities),
      migrations: [__dirname + '/migrations/*.{ts,js}'],
      logging: false,
      synchronize: false
    }),
    dataSourceFactory: async (options: DataSourceOptions) => {
      try {
        return await new DataSource(options).initialize()
      } catch (e) {
        throw e
      }
    }
  }
}

/**
 * Export par défaut utilisé par la CLI TypeORM (ts-node)
 */
const defaultDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: Object.values(entities),
  migrations: [__dirname + '/migrations/*.{ts,js}'],
  logging: false,
  synchronize: false
})

export default defaultDataSource
