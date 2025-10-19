import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { TypeOrmModule } from '@nestjs/typeorm'
import { dataSourceOptionsFactory } from './database/datasource'
import { UsersModule } from './app/users/users.module'
import { ProjectsModule } from './app/project/projects.module'
import { TasksModule } from './app/task/tasks.module'
import { StatusModule } from './app/status/status.module'
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
      sortSchema: true,
      playground: true // disabled in production
    }),
    TypeOrmModule.forRootAsync(dataSourceOptionsFactory()),
    UsersModule,
    ProjectsModule, 
    TasksModule, 
    StatusModule, 
    ScheduleModule.forRoot()
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
