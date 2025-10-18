import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { TasksService } from './tasks.service'
import { CreateTaskInput } from './dto'
import { TaskFiltersInput } from './dto/input/task-filters.input'
import { Task } from '../../database/entities'

@Resolver(() => Task)
export class TasksResolver {
  constructor (
    private readonly tasksService: TasksService
  ) { }
  @Query(() => [Task], {
    description :`Retourne la liste des taches, filtrables par projet`
  })
  async allProjects (
    @Args('dto') dto: TaskFiltersInput
  ) {
    return this.tasksService.all(dto)
  }

  @Mutation(() => Task, {
    description :`Permet de créer une nouvelle tache`
  })
  async createTask (
    @Args('dto') dto: CreateTaskInput
  ) {
    return this.tasksService.createTask(dto)
  }

}
