# NestJs MongoDB Base Crud Api

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![npm](https://img.shields.io/npm/v/nestjs-mongo-crud-base)](https://www.npmjs.com/package/nestjs-mongo-crud-base)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Coverage Status](https://coveralls.io/repos/github/babacarbasse/nestjs-mongo-crud-base/badge.svg?branch=master)](https://coveralls.io/github/babacarbasse/nestjs-mongo-crud-base?branch=master)
[![Build Status](https://travis-ci.org/babacarbasse/nestjs-mongo-crud-base.svg?branch=master)](https://travis-ci.org/babacarbasse/nestjs-mongo-crud-base)
[![dependencies Status](https://david-dm.org/babacarbasse/nestjs-mongo-crud-base/status.svg)](https://david-dm.org/babacarbasse/nestjs-mongo-crud-base)
[![Dev Dependencies](https://david-dm.org/babacarbasse/nestjs-mongo-crud-base/dev-status.svg)](https://david-dm.org/babacarbasse/nestjs-mongo-crud-base?type=dev)

<a href="https://github.com/nestjs/nest">
  <img src="https://raw.githubusercontent.com/nestjsx/crud/master/img/nest-powered.svg?sanitize=true" alt="Nest Powered" />
</a>

<!-- [![Donate](https://img.shields.io/badge/donate-paypal-blue.svg)](https://www.paypal.com/paypalme/babacarbasse) -->

### Usage

### Installation

```bash
npm i nestjs-mongo-crud-base
```

### Importing library

In your service you can import the BaseRepositoryService and extends your custom service

```javascript
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BaseRepositoryService } from 'nestjs-mongo-crud-base';
import { Hero } from "../schemas/hero.schema";


@Injectable()
export class HeroService extends BaseRepositoryService<Hero> {
  constructor(
    @InjectModel(Hero.name) private heroModel: Model<Hero>
  ) {
    super(heroModel);
  }
}

```

In your controller you can import the BaseController and extends your custom controller

```javascript
import {
  BaseController
} from 'nestjs-mongo-crud-base';

import { Controller } from '@nestjs/common';
import { BaseController } from 'nestjs-mongo-crud-base';
import { ApiTags } from '@nestjs/swagger';
import { Hero } from "../schemas/hero.schema";
import { HeroService } from "../providers/document-file.service";

@ApiTags('heros')
@Controller('heros')
export class HeroController extends BaseController<Hero> {
  constructor(private readonly heroService: HeroService) {
    super(heroService)
  }
}
```

```javascript
IBaseService<T> {
  findAll(
    paginateOpts?: {
      page: number;
      limit: number;
    },
    ...args: any[]
  ): Promise<T[]>;

  findOne(id: any, ...args: any[]): Promise<T>;

  findOneBy(query: object, ...args: any[]): Promise<T>;

  findBy(
    query: object,
    paginateOpts?: {
      page: number;
      limit: number;
    },
    ...args: any[]
  ): Promise<T[]>;

  update(id: Types.ObjectId, payload: any, ...args: any[]): Promise<T>;

  create(payload: any, ...args: any[]): Promise<any>;

  delete(id: any, ...args: any[]): Promise<any>;
}
```

<h2>Service functions</h2>
<table>
  <thead>
    <th>Function</th>
    <th>Description</th>
  </thead>
  <tbody>
    <tr>
      <td>findAll</td>
      <td>Return all collection data with pagination if provided.</td>
    </tr>
    <tr>
      <td>findOne</td>
      <td>Return a collection data by id.</td>
    </tr>
    <tr>
      <td>findOneBy</td>
      <td>Return one corresponding collection data with the query provided.</td>
    </tr>
    <tr>
      <td>findBy</td>
      <td>Return all corresponding collection data with the query provided.</td>
    </tr>
    <tr>
      <td>update</td>
      <td>Update data by id.</td>
    </tr>
    <tr>
      <td>create</td>
      <td>Create new data.</td>
    </tr>
    <tr>
      <td>delete</td>
      <td>Remove data by id.</td>
    </tr>
  </tbody>
</table>

<h2>Examples Hero Endpoins</h2>
<table>
  <thead>
    <th>endpoint</th>
    <th>method</th>
    <th>description</th>
  </thead>
  <tbody>
    <tr style="background-color: #cce5ff; color: #000">
      <td>/heros OR /heros?page=1&limit=10</td>
      <td>GET</td>
      <td>Return all heros with pagination if provided.</td>
    </tr>
    <tr style="background-color: #d1ecf1; color: #000">
      <td>/heros/:id</td>
      <td>GET</td>
      <td>Return a hero by id.</td>
    </tr>
    <tr style="background-color: #fff3cd; color: #000">
      <td>/heros/:id</td>
      <td>put</td>
      <td>update a hero by id.</td>
    </tr>
    <tr style="background-color: #d4edda; color: #000">
      <td>/heros</td>
      <td>post</td>
      <td>Create new data.</td>
    </tr>
    <tr style="background-color: #f8d7da; color: #000">
      <td>/heros/:id</td>
      <td>delete</td>
      <td>Remove data by id.</td>
    </tr>
  </tbody>
</table>
