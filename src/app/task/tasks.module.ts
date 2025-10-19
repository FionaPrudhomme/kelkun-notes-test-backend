import { Module } from '@nestjs/common'
import { TasksService } from './tasks.service'
import { TasksResolver } from './tasks.resolver'
import { TasksCronService } from './tasks-cron.service'
@Module({
  providers: [
    TasksResolver,
    TasksService, 
    TasksCronService
  ],
  exports: [TasksService]
})
export class TasksModule {}
