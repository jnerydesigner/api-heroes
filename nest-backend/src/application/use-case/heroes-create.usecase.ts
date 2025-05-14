import { HeroesPropsDto } from '@application/dtos/heroes-props.dto';
import { HeroMapper } from '@domain/mapper/hero.mapper';
import { HeroesRepository } from '@domain/repositories/heroes.repository';
import { Inject, Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';

@Injectable()
export class HeroesCreateUsecase {
  constructor(
    @Inject('HEROES_REPOSITORY')
    private readonly heroesRepository: HeroesRepository,
  ) {}
  async execute(hero: HeroesPropsDto) {
    const heroId = randomUUID();
    const heroProps = { ...hero, id: heroId };
    const heroPersistence = HeroMapper.toPersistence(heroProps);

    const heroResponse =
      await this.heroesRepository.createHero(heroPersistence);
    return HeroMapper.toResponse(heroResponse);
  }
}
