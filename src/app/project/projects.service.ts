import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateProjectInput } from './dto'
import { ProjectFiltersInput } from './dto/input/project-filters.input'
import { Project } from '../../database/entities'
import { ProjectByIdInput } from './dto/input/project-by-id.input'

@Injectable()
export class ProjectsService {

  async all (dto: ProjectFiltersInput) {
    const where: any = {}

    if (dto.userId) {
      where.user = { id: dto.userId }
    }

    return Project.find({
      where,
      order: {
        createdAt: 'DESC'
      },
      relations: {
        user: true
      }
    })
  }

 async findById(dto: ProjectByIdInput) {
    const project = await Project.findOne({
      where: { id: dto.id },
      relations: { user: true },
    });

    if (!project) {
      throw new NotFoundException(`Projet avec l'id ${dto.id} introuvable`);
    }

    return project;
}

  async createProject (dto: CreateProjectInput) {
    return await Project.create({
      ...dto,
      user: {
        id: dto.userId
      }
    }).save()
  }

}
