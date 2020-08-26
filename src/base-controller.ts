import { Get, Post, Delete, Put, Body, Param, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { IBaseService } from './IBase-repository.service';
import { Types } from 'mongoose';
import { PaginatorOptions } from './base-repository.service';

export class BaseController<T, DTO = any> {
  constructor(private readonly IBaseService: IBaseService<T>) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Ok' })
  async findAll(
    @Query('page') page: number,
    @Query('limit') limit: number,
    ...args: any[]
  ): Promise<T[]> {
    let options: PaginatorOptions = {
      page,
      limit
    };
    if (!page || !limit) {
      options = {};
    }
    return this.IBaseService.findAll(options);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Entity retrieved successfully.'
  })
  @ApiResponse({ status: 404, description: 'Entity does not exist' })
  async findById(@Param('id') id: any, ...args: any[]): Promise<T> {
    return this.IBaseService.findOne(id);
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.'
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async create(@Body() entity: DTO, ...args: any[]): Promise<any> {
    return this.IBaseService.create(entity);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Entity deleted successfully.'
  })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 404, description: 'Entity does not exist' })
  async delete(@Param('id') id: Types.ObjectId, ...args: any[]) {
    return this.IBaseService.delete(id);
  }

  @Put(':id')
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({
    status: 200,
    description: 'Entity deleted successfully.'
  })
  @ApiResponse({ status: 404, description: 'Entity does not exist' })
  async update(@Body() updates: DTO, @Param('id') id: Types.ObjectId, ...args: any[]): Promise<T> {
    return this.IBaseService.update(id, updates);
  }
}
