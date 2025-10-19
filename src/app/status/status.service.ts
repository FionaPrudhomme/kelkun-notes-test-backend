import { Injectable } from '@nestjs/common'
import { Status } from 'src/database/entities'

@Injectable()
export class StatusService {

  async all (){
    return Status.find({
      order: {
        name: 'ASC'
      }
    })
  }

}
