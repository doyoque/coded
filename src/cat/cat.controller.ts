import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
    constructor(private readonly catService: CatService) {}

    @Get()
    index(): string {
        return this.catService.getAll();
    }

    @Get()
    filter(@Req() request: Request): string {
        return this.catService.getFilter();
    }

    @Post()
    create(): string {
        return this.catService.postCreate();
    }
}
