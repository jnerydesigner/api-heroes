import { HeroesPropsOutput } from '@application/use-case/heroes-find-all.usecase';
import { HeroesRepository } from '@domain/repositories/heroes.repository';
import { PrismaService } from '../client/prisma.service';
import { Heroes } from '@prisma/client';

export class HeroesPrismaRepository implements HeroesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async delete(): Promise<void> {
    await this.prismaService.heroes.deleteMany();
  }
  async findAllJson(): Promise<HeroesPropsOutput[]> {
    const heroes = await this.prismaService.heroes.findMany();

    return heroes.map((hero) => ({
      id: hero.id,
      name: hero.name,
      about: hero.about,
      image: hero.image,
      heroOrVilain: hero.hero_or_vilain,
    }));
  }
  async findHeroById(id: string): Promise<Heroes> {
    const hero = await this.prismaService.heroes.findUnique({
      where: {
        id,
      },
    });

    if (!hero) {
      throw new Error('Hero not found');
    }

    return hero;
  }
  async createHero(hero: Heroes): Promise<Heroes> {
    const heroExists = await this.findHeroByIdBoolean(hero.id);
    if (heroExists) {
      return this.prismaService.heroes.findFirst({
        where: {
          id: hero.id,
        },
      });
    }

    const createhero = await this.prismaService.heroes.create({
      data: hero,
    });

    return createhero;
  }
  async count(): Promise<number> {
    return this.prismaService.heroes.count();
  }
  async findAll(
    currentPage: number,
    sizePage: number,
  ): Promise<HeroesPropsOutput[]> {
    const skip = Math.max((Number(currentPage) - 1) * Number(sizePage), 0);
    console.log(skip);

    const heroes = await this.prismaService.heroes.findMany({
      skip: skip,
      take: Number(sizePage),
      orderBy: {
        name: 'asc',
      },
    });

    if (heroes.length === 0) {
      return [
        {
          id: null,
          name: '',
          about: '',
          image: '',
          heroOrVilain: '',
        },
      ];
    }

    return heroes.map((hero) => ({
      id: hero.id,
      name: hero.name,
      about: hero.about,
      image: hero.image,
      heroOrVilain: hero.hero_or_vilain,
    }));
  }
  async findHeroByIdBoolean(id: string): Promise<boolean> {
    const hero = await this.prismaService.heroes.findUnique({
      where: {
        id,
      },
    });

    if (!hero) {
      return false;
    }

    return true;
  }

  async updateHero(id: string, heroInput: Heroes): Promise<Heroes> {
    const hero = await this.prismaService.heroes.update({
      where: {
        id,
      },
      data: heroInput,
    });

    return hero;
  }

  async deleteAll(): Promise<void> {
    await this.prismaService.heroes.deleteMany();
  }
}
