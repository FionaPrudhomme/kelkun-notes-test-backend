import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';
import { CreateTaskInput } from './create-task.input';

@InputType()
export class UpdateTaskInput extends PartialType(CreateTaskInput) {
  @Field(() => String, {
    description: `Identifiant de la tâche à mettre à jour`,
  })
  @IsUUID('4', { message: `L'identifiant de la tâche doit être un UUID valide.` })
  id: string;
}