import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator'
import { EntityExist } from '../../../../utils/decorators/entity-exist.validator'
import { User } from '../../../../database/entities'

@InputType()
export class CreateProjectInput {

  @Field({
    description: `Nom du projet`
  })
  @IsString({ message: 'validation.isString' })
  @IsNotEmpty({ message: 'validation.isRequired' })
  name: string


  @Field(() => String, {
    description: `Identifiant de l'utilisateur qui créé le projet`,
    nullable: true
  })
  @IsOptional()
  @IsUUID('4', { message: `L'identifiant de l'utilisateur doit être un UUID valide.` })
  @EntityExist(User, { message: `Cet utilisateur n'existe pas` })
  userId: string
}
