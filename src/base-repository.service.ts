import { Document, Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IBaseService } from './IBase-repository.service';

import { HttpException } from '@nestjs/common';

export class BaseRepositoryService<T extends Document> implements IBaseService<T> {
  constructor(@InjectModel('') private model: Model<T>) {}

  create(payload: any, ...args: any[]): Promise<any> {
    try {
      const createdItem: any = new this.model(payload);
      return createdItem.save();
    } catch (e) {
      throw new HttpException(e.message || e, e.status || 500);
    }
  }

  update(id: Types.ObjectId, updates: any, ...args: any[]): Promise<T> {
    try {
      const updated: any = this.model.findByIdAndUpdate(id, updates, {
        upsert: true
      });
      return updated;
    } catch (e) {
      throw new HttpException(e.message || e, e.status || 500);
    }
  }

  async delete(id: any, ...args: any[]) {
    const item = await this.findOne(id);
    if (item) {
      await item.remove();
    }
    return { message: 'success' };
  }

  async findOne(id: any, ...args: any[]): Promise<T> {
    try {
      const item = await this.model.findById(id).exec();
      if (!item) {
        throw new HttpException('Not found', 404);
      }
      return item;
    } catch (e) {
      throw new HttpException(e.message || e, e.status || 500);
    }
  }

  findAll(...args: any[]): Promise<T[]> {
    try {
      return this.model.find().exec();
    } catch (e) {
      throw new HttpException(e.message || e, e.status || 500);
    }
  }
}
