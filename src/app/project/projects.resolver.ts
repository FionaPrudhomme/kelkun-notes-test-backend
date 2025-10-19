import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { ProjectsService } from './projects.service'
import { CreateProjectInput } from './dto'
import { ProjectFiltersInput } from './dto/input/project-filters.input'
import { Project } from '../../database/entities'
import { ProjectByIdInput } from './dto/input/project-by-id.input'

@Resolver(() => Project)
export class ProjectsResolver {
  constructor (
    private readonly projectsService: ProjectsService
  ) { }

  @Query(() => [Project], {
    description :`Retourne la liste des projets, filtrables par utilisateur`
  })
  async allProjects (
    @Args('dto') dto: ProjectFiltersInput
  ) {
    return this.projectsService.all(dto)
  }

  @Query(() => Project, {
    description :`Retourne le projet avec l'id correspondant`
  })
  async findProjectById (
    @Args('dto') dto: ProjectByIdInput
  ) {
    return this.projectsService.findById(dto)
  }

  @Mutation(() => Project, {
    description :`Permet de créer un nouveau projet`
  })
  async createProject (
    @Args('dto') dto: CreateProjectInput
  ) {
    return this.projectsService.createProject(dto)
  }

}
