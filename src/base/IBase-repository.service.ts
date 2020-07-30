import { Types } from 'mongoose';

export interface IBaseService<T> {
  findAll(): Promise<T[]>;
  findOne(id: any): Promise<T>;
  update(id: Types.ObjectId, payload: any): Promise<T>;
  create(payload: any): Promise<any>;
  delete(id: any): Promise<any>;
}
