import { Entity, model, property, hasOne } from '@loopback/repository';
import { Message } from './message.model';

@model({ settings: {} })
export class User extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  mobile: number;

  @property({
    type: 'date',
    required: true,
  })
  lastSeen: string;

  @hasOne(() => Message)
  message?: Message

  constructor(data?: Partial<User>) {
    super(data);
  }
}
