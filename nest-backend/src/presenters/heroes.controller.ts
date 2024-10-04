import { HeroesPropsDto } from '@application/dtos/heroes-props.dto';
import { PaginationDto } from '@application/dtos/pagination.dto';
import { HeroFindOneUsecase } from '@application/use-case/hero-find-one.usecase';
import { HeroesCreateUsecase } from '@application/use-case/heroes-create.usecase';
import { HeroesFindAllUseCase } from '@application/use-case/heroes-find-all.usecase';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('heroes')
export class HeroesController {
    constructor(private readonly findOneUseCase: HeroesFindAllUseCase, private readonly heroesCreateUsecase: HeroesCreateUsecase, private readonly heroFindOneUseCase: HeroFindOneUsecase) { }

    @Get()
    async findAll(@Query() query: PaginationDto) {
        return this.findOneUseCase.execute(query);
    }

    @Post()
    async createHero(@Body() body: HeroesPropsDto) {
        return this.heroesCreateUsecase.execute(body);
    }

    @Get('details/:id')
    async getHeroDetails(@Param('id') id: string) {
        return this.heroFindOneUseCase.execute(id);
    }
}
