import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm'
import { Tracking } from './common/tracking.entity'
import { Project } from './project.entity'

@Entity()
@ObjectType()
@Unique(['email'])
export class User extends Tracking {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field(() => String, {
    nullable: false
  })
  @Index()
  @Column({
    nullable: false,
    unique: true,
    name: 'email'
  })
  email: string

  @Field(() => String)
  @Column({ name: 'firstname' })
  firstname: string

  @Field(() => [Project], { nullable: true })
  @OneToMany(() => Project, (p) => p.user, {
    cascade: true
  })
  projects: Project[]
}
