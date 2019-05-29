import { DefaultCrudRepository, HasOneRepositoryFactory, repository } from '@loopback/repository';
import { User, Message } from '../models';
import { UserMysqlDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { MessageRepository } from './message.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id
  > {
  public readonly message: HasOneRepositoryFactory<
    Message,
    typeof User.prototype.id
  >;
  constructor(
    @inject('datasources.user_mysql') dataSource: UserMysqlDataSource,
    @repository.getter('MessageRepository')
    getMessageRepository: Getter<MessageRepository>,
  ) {
    super(User, dataSource);
    this.message = this.createHasOneRepositoryFactoryFor(
      'message', getMessageRepository,
    );
  }
}
