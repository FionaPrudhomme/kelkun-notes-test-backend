import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { User } from 'src/database/entities'
import { UsersService } from './users.service'
import { CreateUserInput } from './dto'

@Resolver(() => User)
export class UsersResolver {
  constructor (
    private readonly userService: UsersService
  ) { }

  @Query(() => [User], {
    description :`Retourne la liste des utilisateurs`
  })
  async allUsers () {
    return this.userService.all()
  }

  @Mutation(() => User, {
    description :`Permet de créer un nouvel utilisateur`
  })
  async createUser (
    @Args('dto') dto: CreateUserInput
  ) {
    return this.userService.createUser(dto)
  }

}
