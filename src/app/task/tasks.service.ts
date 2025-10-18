import { Injectable } from '@nestjs/common'
 import { CreateTaskInput } from './dto'
import { TaskFiltersInput } from './dto/input/task-filters.input'
import { Task } from '../../database/entities'

@Injectable()
export class TasksService {
  async all (dto: TaskFiltersInput) {
    const where: any = {}

    if (dto.projectId) {
      where.project = { id: dto.projectId }
    }

    return Task.find({
      where,
      order: {
        createdAt: 'DESC'
      },
      relations: {
        project: true
      }
    })
  }

  async createTask (dto: CreateTaskInput) {
    return await Task.create({
      ...dto,
      project: {
        id: dto.projectId
      }
    }).save()
  }

}
