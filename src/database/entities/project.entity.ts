import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Tracking } from './common/tracking.entity'
import { User } from './user.entity'

@Entity()
@ObjectType()
export class Project extends Tracking {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field(() => String)
  @Column({ name: 'name' })
  name: string

  @Field(() => User)
  @ManyToOne(() => User, (u) => u.projects, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User
}
