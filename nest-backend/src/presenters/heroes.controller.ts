import { HeroesPropsDto } from '@application/dtos/heroes-props.dto';
import { PaginationDto } from '@application/dtos/pagination.dto';
import { HeroFindOneUsecase } from '@application/use-case/hero-find-one.usecase';
import { HeroesCreateJsonUseCase } from '@application/use-case/heroes-create-json.usecase';
import { HeroesCreateUsecase } from '@application/use-case/heroes-create.usecase';
import { HeroesDeleteAllUseCase } from '@application/use-case/heroes-delete-all.usecase';
import { HeroesFindAllUseCase } from '@application/use-case/heroes-find-all.usecase';
import { HeroesGenerateJsonUseCase } from '@application/use-case/heroes-generate-json.usecase';
import { HeroesUpdateUseCase } from '@application/use-case/heroes-update.usecase';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('heroes')
export class HeroesController {
    constructor(private readonly findOneUseCase: HeroesFindAllUseCase, private readonly heroesCreateUsecase: HeroesCreateUsecase, private readonly heroFindOneUseCase: HeroFindOneUsecase, private readonly createJsonHeroes: HeroesCreateJsonUseCase, private readonly generateJsonHeroes: HeroesGenerateJsonUseCase, private readonly deleteAllUseCase: HeroesDeleteAllUseCase, private readonly updateHeroUseCase: HeroesUpdateUseCase) { }

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

    @Get("createjson")
    async createJson() {
        return this.createJsonHeroes.execute();
    }

    @Get("generate-heroes")
    async generateHeroes() {
        await this.generateJsonHeroes.execute();
    }

    @Delete("deleteall")
    async deleteAll() {
        await this.deleteAllUseCase.execute();
    }

    @Patch('/:id/update')
    async updateHero(@Param('id') id: string, @Body() body: HeroesPropsDto) {
        return this.updateHeroUseCase.execute(id, body);
    }
}
