import { HeroesPropsOutput } from '@application/use-case/heroes-find-all.usecase';
import { Heroes } from '@prisma/client';

export interface HeroesRepository {
  findAll(currentPage: number, sizePage: number): Promise<HeroesPropsOutput[]>;
  count(): Promise<number>;
  createHero(hero: Heroes): Promise<Heroes>;
  findHeroByIdBoolean(id: string): Promise<boolean>;
  findHeroById(id: string): Promise<Heroes>;
  findAllJson(): Promise<HeroesPropsOutput[]>;
  delete(): Promise<void>;
  deleteAll(): Promise<void>;
  updateHero(id: string, hero: Heroes): Promise<Heroes>;
}
