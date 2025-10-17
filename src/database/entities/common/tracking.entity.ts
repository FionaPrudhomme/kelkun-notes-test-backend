import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql'
import { BaseEntity, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm'

@ObjectType()
export class Tracking extends BaseEntity {
  @Field(() => GraphQLISODateTime, {
    description: 'Date de création (UTC, immuable)'
  })
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    precision: 3,
    update: false
  })
  createdAt!: Date

  @Field(() => GraphQLISODateTime, {
    description: 'Date de dernière mise à jour (UTC)'
  })
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    precision: 3
  })
  updatedAt!: Date

  @Field(() => GraphQLISODateTime, {
    nullable: true,
    description: 'Date de suppression (UTC)'
  })
  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamptz',
    precision: 3,
    nullable: true
  })
  deletedAt?: Date
}
