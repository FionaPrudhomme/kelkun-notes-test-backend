import { BadRequestException, Injectable } from '@nestjs/common'
import { User } from 'src/database/entities'
import { CreateUserInput } from './dto'

@Injectable()
export class UsersService {

  async all (){
    return User.find({
      order: {
        firstname: 'ASC'
      }
    })
  }

  async createUser (dto: CreateUserInput): Promise<User> {
    const existingUser = await User.findOneBy({
      email: dto.email
    })
    if (existingUser) {
      throw new BadRequestException(`Cette adresse email est déjà utilisée par un autre utilisateur.`)
    }

    return await User.create({
      ...dto
    }).save()

  }

}
