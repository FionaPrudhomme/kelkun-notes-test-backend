import { Field, InputType } from '@nestjs/graphql'
import { IsEmail, IsNotEmpty, IsString } from 'class-validator'

@InputType()
export class CreateUserInput {

  @Field({
    description: 'Prénom de l\'utilisateur'
  })
  @IsString({ message: 'validation.isString' })
  @IsNotEmpty({ message: 'validation.isRequired' })
  firstname: string

  @Field({
    description: 'Email de l\'utilisateur'
  })
  @IsEmail({}, { message: 'validation.email' })
  @IsNotEmpty({ message: 'validation.isRequired' })
  email: string

}
