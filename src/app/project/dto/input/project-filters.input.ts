import { Field, InputType } from '@nestjs/graphql'
import { IsOptional, IsUUID } from 'class-validator'
import { EntityExist } from '../../../../utils/decorators/entity-exist.validator'
import { User } from '../../../../database/entities'

@InputType()
export class ProjectFiltersInput {

  @Field(() => String, {
    description: `Identifiant de l'utilisateur`,
    nullable: true
  })
  @IsOptional()
  @IsUUID('4', { message: `L'identifiant de l'utilisateur doit être un UUID valide.` })
  @EntityExist(User, { message: `Cet utilisateur n'existe pas` })
  userId: string

}
