import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { Logger } from '@nestjs/common'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import fastifyCors from '@fastify/cors'
import fastifyCsrf from '@fastify/csrf-protection'

declare const module: any

async function bootstrap () {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      bodyLimit: 100 * 1024 * 1024 // 100 Mo
    }),
    { rawBody: true }
  )

  await app.register(fastifyCors, {
    credentials: true,
    origin: process.env.APP_CORS.split(',')
  })
  await app.register(fastifyCsrf)

  const PORT = parseInt(process.env.PORT, 10) || 3001
  await app.listen(PORT, '0.0.0.0')
  Logger.log(`🚀 Application is running on: http://localhost:${PORT}/graphql`)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }

}

bootstrap().then()
