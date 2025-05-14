import { HeroesRepository } from '@domain/repositories/heroes.repository';
import { Inject, Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs/promises';
import { HeroMapper } from '@domain/mapper/hero.mapper';

@Injectable()
export class HeroesGenerateJsonUseCase {
  constructor(
    @Inject('HEROES_REPOSITORY')
    private readonly heroesRepository: HeroesRepository,
  ) {}
  async execute() {
    await this.heroesRepository.delete();
    const filePath = path.join('src', 'infra', 'data', 'heroes.json');
    try {
      const data = await fs.readFile(filePath, 'utf-8');
      const heroes = JSON.parse(data);
      for (const hero of heroes) {
        const heroPersistence = HeroMapper.toPersistence(hero);
        await this.heroesRepository.createHero(heroPersistence);
      }
    } catch (err) {
      console.error('Erro ao escrever o arquivo:', err);
    }
  }
}
