import { HeroMapper } from '@domain/mapper/hero.mapper';
import { HeroesRepository } from '@domain/repositories/heroes.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class HeroFindOneUsecase {
    constructor(
        @Inject('HEROES_REPOSITORY')
        private readonly heroesRepository: HeroesRepository
    ) { }
    async execute(heroId: string) {
        const heroResponsepersistence = await this.heroesRepository.findHeroById(heroId);

        const heroMapper = HeroMapper.toResponse(heroResponsepersistence);

        return heroMapper
    }

}
