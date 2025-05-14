import { HeroMapper } from '@domain/mapper/hero.mapper';
import { HeroesRepository } from '@domain/repositories/heroes.repository';
import { Inject, Injectable } from '@nestjs/common';
import { join, extname } from 'path';
import { promises as fs, readFileSync } from 'fs';
import slug from 'slug';
import * as sharp from 'sharp';

@Injectable()
export class AppendImageHeroUseCase {
  private readonly uploadDirectory = join('src', 'infra', 'data', 'images');
  constructor(
    @Inject('HEROES_REPOSITORY')
    private readonly heroesRepository: HeroesRepository,
  ) {
    this.createUploadDirectory();
  }

  async execute(heroId: string, file: Express.Multer.File) {
    const heroResponsePersistence =
      await this.heroesRepository.findHeroById(heroId);

    const fileExt = extname(file.originalname);
    const name = slug(heroResponsePersistence.name);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const imagePath = `${name}-${uniqueSuffix}${fileExt}`;
    const newImagePath = `${name}-${uniqueSuffix}.png`;
    const filePath = join(this.uploadDirectory, imagePath);

    await fs.writeFile(filePath, file.buffer);

    if (heroResponsePersistence.imagePath) {
      const oldFilePath = join(
        this.uploadDirectory,
        heroResponsePersistence.imagePath,
      );

      try {
        await fs.access(oldFilePath);
        console.log('Arquivo antigo encontrado:', oldFilePath);

        await fs.unlink(oldFilePath);
        console.log('Arquivo antigo removido');
      } catch (error) {
        console.log('Arquivo antigo não encontrado ou já removido', error);
      }
    }

    try {
      const inputImage = readFileSync(filePath);
      await sharp(inputImage)
        .toFormat('png')
        .toFile(`${this.uploadDirectory}/${newImagePath}`);
    } catch (error) {
      console.error('Erro ao converter a imagem:', error);
    } finally {
      await fs.unlink(filePath);
    }

    const heroMapper = HeroMapper.toPersistence({
      ...heroResponsePersistence,
      heroOrVilain: heroResponsePersistence.hero_or_vilain,
      imagePath: newImagePath,
    });

    const response = await this.heroesRepository.updateHero(
      heroMapper.id,
      heroMapper,
    );

    return HeroMapper.toResponse(response);
  }

  private async createUploadDirectory(): Promise<void> {
    try {
      await fs.mkdir(this.uploadDirectory, { recursive: true });
    } catch (error) {
      console.error('Erro ao criar diretório de upload:', error);
    }
  }
}
