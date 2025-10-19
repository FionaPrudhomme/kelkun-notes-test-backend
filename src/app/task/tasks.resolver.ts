import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { TasksService } from './tasks.service'
import { CreateTaskInput, UpdateTaskInput } from './dto'
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
  async allTasks (
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

  @Mutation(() => Task, {
    description: "Permet de mettre à jour un ou plusieurs champs d'une tache"
  })
  async updateTask(
    @Args('dto') dto: UpdateTaskInput
  ) {
    return this.tasksService.updateTask(dto);
  }

}
