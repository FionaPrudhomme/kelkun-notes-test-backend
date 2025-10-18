import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Column, Entity, Unique, PrimaryGeneratedColumn } from 'typeorm'
import { Tracking } from './common/tracking.entity'

@Entity()
@ObjectType()
@Unique(['name'])
export class Status extends Tracking {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field(() => String, {
    nullable: false
  })
  @Column({
    name: 'name',
    nullable: false, 
    unique: true
   })
  name: string
}
