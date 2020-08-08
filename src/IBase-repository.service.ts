import { Types } from 'mongoose';
import { PaginatorOptions } from './base-repository.service';

export interface IBaseService<T> {
  findAll(paginateOpts?: PaginatorOptions, ...args: any[]): Promise<T[]>;
  findOne(id: any, ...args: any[]): Promise<T>;
  findOneBy(query: object, ...args: any[]): Promise<T>;
  findBy(query: object, paginateOpts?: PaginatorOptions, ...args: any[]): Promise<T[]>;
  update(id: Types.ObjectId, payload: any, ...args: any[]): Promise<T>;
  create(payload: any, ...args: any[]): Promise<any>;
  delete(id: any, ...args: any[]): Promise<any>;
}
