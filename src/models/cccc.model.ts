import {model, property} from '@loopback/repository';
import {Message} from '.';

@model({settings: {strict: false}})
export class Cccc extends Message {
  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Cccc>) {
    super(data);
  }
}
