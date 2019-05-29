import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './mongo-mess.datasource.json';

export class MongoMessDataSource extends juggler.DataSource {
  static dataSourceName = 'mongo_mess';

  constructor(
    @inject('datasources.config.mongo_mess', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
