import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Status } from 'src/database/entities'
import { StatusService } from './status.service'

@Resolver(() => Status)
export class StatusResolver {
  constructor (
    private readonly statusService: StatusService
  ) { }

  @Query(() => [Status], {
    description :`Retourne la liste des status`
  })
  async allStatus () {
    return this.statusService.all()
  }

}
