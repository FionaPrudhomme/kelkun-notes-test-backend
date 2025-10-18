import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Column, Entity, Unique, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Tracking } from './common/tracking.entity'
import { Task } from './task.entity'

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

  @Field(() => [Task], { nullable: true })
  @OneToMany(() => Task, (p) => p.project, {
    cascade: true
  })
  tasks: Task[]
}
