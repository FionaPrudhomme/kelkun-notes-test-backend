import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator'
import { BaseEntity } from 'typeorm'

export function EntityExist (
  EntityObject: typeof BaseEntity,
  validationOptions?: ValidationOptions
) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [EntityObject],
      validator: EntityExistConstraint
    })
  }
}

@ValidatorConstraint({ name: 'EntityExist' })
export class EntityExistConstraint implements ValidatorConstraintInterface {
  async validate (value: any, args: ValidationArguments) {
    if (!value) return true

    const [relatedPropertyName] = args.constraints as (typeof BaseEntity)[]
    return !!(await relatedPropertyName.findOne({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      where: { id: value },
      cache: true
    }))
  }
}
