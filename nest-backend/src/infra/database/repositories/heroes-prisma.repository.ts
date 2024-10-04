import { HeroesPropsOutput } from "@application/use-case/heroes-find-all.usecase";
import { HeroesRepository } from "@domain/repositories/heroes.repository";
import { PrismaService } from "../client/prisma.service";
import { Heroes } from "@prisma/client";

export class HeroesPrismaRepository implements HeroesRepository {
    constructor(private readonly prismaService: PrismaService) { }
    async createhero(hero: Heroes): Promise<Heroes> {
        const heroExists = await this.findHeroByIdBoolean(hero.id);
        if (heroExists) {
            return this.prismaService.heroes.findFirst({
                where: {
                    id: hero.id
                }
            });
        }

        const createhero = await this.prismaService.heroes.create({
            data: hero
        });

        return createhero
    }
    async count(): Promise<number> {
        return this.prismaService.heroes.count();
    }
    async findAll(currentPage: number, sizePage: number): Promise<HeroesPropsOutput[]> {
        const heroes = await this.prismaService.heroes.findMany({
            skip: (Number(currentPage) - 1) * Number(sizePage),
            take: Number(sizePage),
            orderBy: {
                name: 'asc'
            }
        });

        return heroes.map(hero => ({
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
                id
            }
        });

        if (!hero) {
            return false
        }

        return true
    }
}