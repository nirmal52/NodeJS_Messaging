/*// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class UserMessageController {
  constructor() {}
}
*/
import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import { User, Message } from '../models';
import { UserRepository } from '../repositories';

export class UserMessageController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) { }


  @post('/users/{id}/message')
  async createMessage(
    @param.path.number('id') messageID: typeof User.prototype.id,
    @requestBody() messageData: Message,
  ): Promise<Message> {
    return await this.userRepository
      .message(messageID)
      .create(messageData);
  }

  @get('/usersmessage/{id}', {
    responses: {
      '200': {
        description: 'User model instance',
        content: { 'application/json': { schema: { 'x-ts-type': User } } },
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<User> {
    return await this.userRepository.findById(id);
  }


}
