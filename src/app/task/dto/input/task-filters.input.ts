import { Field, InputType } from '@nestjs/graphql'
import { IsOptional, IsUUID } from 'class-validator'
import { EntityExist } from '../../../../utils/decorators/entity-exist.validator'
import { Project } from '../../../../database/entities'

@InputType()
export class TaskFiltersInput {

  @Field(() => String, {
    description: `Identifiant du projet`,
    nullable: true
  })
  @IsOptional()
  @IsUUID('4', { message: `L'identifiant du projet doit être un UUID valide.` })
  @EntityExist(Project, { message: `Ce projet n'existe pas` })
  projectId: string

  @Field(() => String, {
    description: 'Filtre optionnel par statut',
    nullable: true,
  })
  @IsOptional()
  @IsUUID('4', { message: `L'identifiant du projet doit être un UUID valide.` })
  statusId?: string;

}
