import { HeroesRepository } from '@domain/repositories/heroes.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class HeroesDeleteAllUseCase {
  constructor(
    @Inject('HEROES_REPOSITORY')
    private readonly heroesRepository: HeroesRepository,
  ) {}
  async execute() {
    return this.heroesRepository.deleteAll();
  }
}
