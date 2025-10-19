import { Injectable } from '@nestjs/common'
 import { CreateTaskInput, UpdateTaskInput } from './dto'
import { TaskFiltersInput } from './dto/input/task-filters.input'
import { Project, Status, Task } from '../../database/entities'

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
      title: dto.title,
      description: dto.description,
      isArchived: false,
      archivedAt: undefined,
      project: { id: dto.projectId } as Project,
      status: { id: dto.statusId } as Status,
    }).save();
  }

  async updateTask(dto: UpdateTaskInput) {
   const existing = await Task.findOne({
      where: { id: dto.id },
      relations: ['project', 'status'],
    });

    if (!existing) {
      throw new Error(`La tâche avec l'id ${dto.id} n'existe pas`);
    }

    const updated = await Task.preload({
      id: dto.id,
      ...dto,
      project: dto.projectId ? { id: dto.projectId } : existing.project,
      status: dto.statusId ? { id: dto.statusId } : existing.status,
    });

    return await updated.save();
  }
}
