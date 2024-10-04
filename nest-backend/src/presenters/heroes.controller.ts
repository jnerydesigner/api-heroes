import { HeroesPropsDto } from '@application/dtos/heroes-props.dto';
import { PaginationDto } from '@application/dtos/pagination.dto';
import { HeroesCreateUsecase } from '@application/use-case/heroes-create.usecase';
import { HeroesFindAllUseCase } from '@application/use-case/heroes-find-all.usecase';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('heroes')
export class HeroesController {
    constructor(private readonly findOneUseCase: HeroesFindAllUseCase, private readonly heroesCreateUsecase: HeroesCreateUsecase) { }

    @Get()
    async findAll(@Query() query: PaginationDto) {
        return this.findOneUseCase.execute(query);
    }

    @Post()
    async createHero(@Body() body: HeroesPropsDto) {
        return this.heroesCreateUsecase.execute(body);
    }
}
