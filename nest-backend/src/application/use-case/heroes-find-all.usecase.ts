import { PaginationDto } from '@application/dtos/pagination.dto';
import { HeroesRepository } from '@domain/repositories/heroes.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class HeroesFindAllUseCase {
  constructor(
    @Inject('HEROES_REPOSITORY')
    private readonly heroesRepository: HeroesRepository,
  ) {}
  async execute(query: PaginationDto): Promise<HeroesOutput> {
    const totalItems = await this.heroesRepository.count();
    const totalPages = Math.ceil(totalItems / Number(query.limit));

    const heroesResponse = await this.heroesRepository.findAll(
      query.page,
      query.limit,
    );

    return {
      heroes: heroesResponse,
      currentPage: Number(query.page),
      pageSize: Number(query.limit),
      totalPages,
      total: heroesResponse.length,
    };
  }
}

export interface HeroesPropsOutput {
  id?: string | undefined;
  name: string;
  image: string;
  heroOrVilain: string;
  about: string;
}

export interface HeroesOutput {
  heroes: HeroesPropsOutput[];
  currentPage: number;
  pageSize: number;
  totalPages: number;
  total: number;
}
