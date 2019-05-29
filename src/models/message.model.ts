import { Entity, model, property, belongsTo } from '@loopback/repository';
import { User } from './user.model';

@model({ settings: {} })
export class Message extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  message1: string;

  @property({
    type: 'string',
  })
  message2?: string;

  @belongsTo(() => User)
  userId: number;

  constructor(data?: Partial<Message>) {
    super(data);
  }
}
