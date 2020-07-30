# NestJs MongoDB Base Crud Api

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![npm](https://img.shields.io/npm/v/nestjs-mongo-crud-base)](https://www.npmjs.com/package/nestjs-mongo-crud-base)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Coveralls](https://img.shields.io/coveralls/alexjoverm/typescript-library-starter.svg)](https://coveralls.io/github/alexjoverm/typescript-library-starter)
[![dependencies Status](https://david-dm.org/babacarbasse/nestjs-mongo-crud-base/status.svg)](https://david-dm.org/babacarbasse/nestjs-mongo-crud-base)
[![Dev Dependencies](https://david-dm.org/babacarbasse/nestjs-mongo-crud-base/dev-status.svg)](https://david-dm.org/babacarbasse/nestjs-mongo-crud-base?type=dev)

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

@ApiTags('documents')
@Controller('documents')
export class HeroController extends BaseController<Hero> {
  constructor(private readonly heroService: HeroService) {
    super(heroService)
  }
}
```
