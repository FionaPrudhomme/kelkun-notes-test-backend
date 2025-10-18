import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator'
import { EntityExist } from '../../../../utils/decorators/entity-exist.validator'
import { Status, Project } from '../../../../database/entities'

@InputType()
export class CreateTaskInput {

  @Field({
    description: `Titre`
  })
  @IsString({ message: 'validation.isString' })
  @IsNotEmpty({ message: 'validation.isRequired' })
  title: string

  @Field({
    description: `Description`,
    nullable: true
  })
  @IsOptional()
  @IsString({ message: 'validation.isString' })
  description: string


  @Field(() => String, {
      description: `Identifiant du projet lié à la tache`
  })
  @IsUUID('4', { message: `L'identifiant du projet doit être un UUID valide.` })
  @EntityExist(Project, { message: `Ce projet n'existe pas` })
  projectId: string

  @Field(() => String, {
    description: `Identifiant du statut de la tache`
  })
  @IsUUID('4', { message: `L'identifiant du statut doit être un UUID valide.` })
  @EntityExist(Status, { message: `Ce statut n'existe pas` })
  statusId: string
}
