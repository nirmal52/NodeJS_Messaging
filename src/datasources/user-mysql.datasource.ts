import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './user-mysql.datasource.json';

export class UserMysqlDataSource extends juggler.DataSource {
  static dataSourceName = 'user_mysql';

  constructor(
    @inject('datasources.config.user_mysql', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
