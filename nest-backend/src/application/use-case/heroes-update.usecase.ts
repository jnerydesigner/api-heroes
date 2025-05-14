import { HeroesPropsDto } from '@application/dtos/heroes-props.dto';
import { HeroMapper } from '@domain/mapper/hero.mapper';
import { HeroesRepository } from '@domain/repositories/heroes.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class HeroesUpdateUseCase {
  constructor(
    @Inject('HEROES_REPOSITORY')
    private readonly heroesRepository: HeroesRepository,
  ) {}
  async execute(heroeId: string, heroDataUpdate: HeroesPropsDto) {
    let hero = await this.heroesRepository.findHeroById(heroeId);
    if (!hero) {
      throw new Error('Hero not found');
    }

    const heroUpdateObject = {
      ...hero,
      ...heroDataUpdate,
    };

    const update = HeroMapper.toPersistence(heroUpdateObject);
    await this.heroesRepository.updateHero(heroeId, update);
    hero = await this.heroesRepository.findHeroById(heroeId);
    const response = HeroMapper.toResponse(hero);
    return response;
  }
}

// , heroDataUpdate: HeroesPropsDto
