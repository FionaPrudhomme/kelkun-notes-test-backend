import { InputType, Field } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class ProjectByIdInput {
  @Field(() => String, {
    description: `Identifiant du projet`
  })
  @IsUUID('4', { message: `L'identifiant du projet doit être un UUID valide.` })
  id: string;
}