import {DefaultCrudRepository} from '@loopback/repository';
import {Message} from '../models';
import {MongoMessDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MessageRepository extends DefaultCrudRepository<
  Message,
  typeof Message.prototype.id
> {
  constructor(
    @inject('datasources.mongo_mess') dataSource: MongoMessDataSource,
  ) {
    super(Message, dataSource);
  }
}
