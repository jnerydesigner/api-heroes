import { HeroesPropsDto } from '@application/dtos/heroes-props.dto';
import { PaginationDto } from '@application/dtos/pagination.dto';
import { AppendImageHeroUseCase } from '@application/use-case/append-image-hero.usecase';
import { HeroFindOneUsecase } from '@application/use-case/hero-find-one.usecase';
import { HeroesCreateJsonUseCase } from '@application/use-case/heroes-create-json.usecase';
import { HeroesCreateUsecase } from '@application/use-case/heroes-create.usecase';
import { HeroesDeleteAllUseCase } from '@application/use-case/heroes-delete-all.usecase';
import { HeroesFindAllUseCase } from '@application/use-case/heroes-find-all.usecase';
import { HeroesGenerateJsonUseCase } from '@application/use-case/heroes-generate-json.usecase';
import { HeroesUpdateUseCase } from '@application/use-case/heroes-update.usecase';
import { Public } from '@infra/decorators/is_public';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { join } from 'path';
import { promises as fs } from 'fs';

@Controller('heroes')
export class HeroesController {
  private readonly imageDirectory = join('src', 'infra', 'data', 'images');
  constructor(
    private readonly findOneUseCase: HeroesFindAllUseCase,
    private readonly heroesCreateUsecase: HeroesCreateUsecase,
    private readonly heroFindOneUseCase: HeroFindOneUsecase,
    private readonly createJsonHeroes: HeroesCreateJsonUseCase,
    private readonly generateJsonHeroes: HeroesGenerateJsonUseCase,
    private readonly deleteAllUseCase: HeroesDeleteAllUseCase,
    private readonly updateHeroUseCase: HeroesUpdateUseCase,
    private readonly appendImageHeroUseCase: AppendImageHeroUseCase,
  ) {}

  @Public()
  @Get()
  async findAll(@Query() query: PaginationDto) {
    return this.findOneUseCase.execute(query);
  }

  @Post()
  async createHero(@Body() body: HeroesPropsDto) {
    return this.heroesCreateUsecase.execute(body);
  }

  @Put('append-image-hero/:id')
  @Public()
  @UseInterceptors(FileInterceptor('file'))
  async appendImageHeroes(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.appendImageHeroUseCase.execute(id, file);
  }

  @Get('details/:id')
  @Public()
  async getHeroDetails(@Param('id') id: string) {
    return this.heroFindOneUseCase.execute(id);
  }

  @Get('createjson')
  async createJson() {
    return this.createJsonHeroes.execute();
  }

  @Get('generate-heroes')
  async generateHeroes() {
    await this.generateJsonHeroes.execute();
  }

  @Delete('deleteall')
  async deleteAll() {
    await this.deleteAllUseCase.execute();
  }

  @Patch('/:id/update')
  async updateHero(@Param('id') id: string, @Body() body: HeroesPropsDto) {
    return this.updateHeroUseCase.execute(id, body);
  }

  @Get('static/:imageName')
  @Public()
  async getImage(@Param('imageName') imageName: string, @Res() res: Response) {
    const imagePath = join(
      process.cwd(),
      'src',
      'infra',
      'data',
      'images',
      imageName,
    );
    console.log(imageName);

    try {
      console.log(imagePath);
      await fs.access(imagePath);

      res.sendFile(imagePath);
    } catch (error) {
      res.status(404).send('Image not found');
    }
  }
}
