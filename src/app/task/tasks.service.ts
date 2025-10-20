import { Injectable } from '@nestjs/common'
 import { CreateTaskInput, UpdateTaskInput } from './dto'
import { TaskFiltersInput } from './dto/input/task-filters.input'
import { Project, Status, Task } from '../../database/entities'

@Injectable()
export class TasksService {
  async all (dto: TaskFiltersInput) {
    const where: any = {
      isArchived: false
    }

    if (dto.projectId) {
      where.project = { id: dto.projectId }
    }

    if (dto.statusId) {
      where.status = { id: dto.statusId }
    }

    return Task.find({
      where,
      order: {
        status: {
          name: 'ASC'
        }
      },
      relations: {
        project: true, 
        status: true
      }
    })
  }

  async createTask(dto: CreateTaskInput) {
    const defaultStatus = await Status.findOneBy({ name: 'À faire' });
    if (!defaultStatus) {
      throw new Error('Le statut "À faire" n’existe pas en base.');
    }
    return await Task.create({
      title: dto.title,
      description: dto.description,
      isArchived: false,
      archivedAt: null,
      project: { id: dto.projectId } as Project,
      status: defaultStatus,
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
