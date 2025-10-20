import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Tracking } from './common/tracking.entity'
import { Project } from './project.entity'
import { Status } from './status.entity'

@Entity()
@ObjectType()
export class Task extends Tracking {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field(() => String, {
    nullable: false
  })
  @Column({
    name: 'title',
    nullable: false
   })
  title: string

  @Field(() => String, {
    nullable: true
  })
  @Column({
    name: 'description', 
    nullable: true
  })
  description: string

  @Field(() => Boolean, {
    nullable: false
  })
  @Column({
    name: 'isArchived', 
    nullable: false
  })
  isArchived: boolean


  @Field(() => Date, { nullable: true })
  @Column({
    name: 'archivedAt',
    type: 'timestamptz', // ✅ UTC
    nullable: true,
  })
  archivedAt: Date;

  @Field(() => Status, {
    nullable: false
  })
  @ManyToOne(() => Status, (u) => u.tasks, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'status_id' })
  status: Status

  @Field(() => Project, {
    nullable: false
  })
  @ManyToOne(() => Project, (u) => u.tasks, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'project_id' })
  project: Project
}
