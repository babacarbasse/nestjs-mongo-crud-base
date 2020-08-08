import { Get, Post, Delete, Put, Body, Param, Query } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { IBaseService } from './IBase-repository.service';
import { Types } from 'mongoose';

export class BaseController<T> {
  constructor(private readonly IBaseService: IBaseService<T>) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Ok' })
  async findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    ...args: any[]
  ): Promise<T[]> {
    return this.IBaseService.findAll({
      page,
      limit
    });
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
  async create(@Body() entity: T, ...args: any[]): Promise<any> {
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
  async update(@Body() updates: T, @Param('id') id: Types.ObjectId, ...args: any[]): Promise<T> {
    return this.IBaseService.update(id, updates);
  }
}
