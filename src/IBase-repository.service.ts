import { Types } from 'mongoose';

export interface IBaseService<T> {
  findAll(...args: any[]): Promise<T[]>;
  findOne(id: any, ...args: any[]): Promise<T>;
  update(id: Types.ObjectId, payload: any, ...args: any[]): Promise<T>;
  create(payload: any, ...args: any[]): Promise<any>;
  delete(id: any, ...args: any[]): Promise<any>;
}
