import { HeroFindOneUsecase } from '@application/use-case/hero-find-one.usecase';
import { HeroesCreateUsecase } from '@application/use-case/heroes-create.usecase';
import { HeroesFindAllUseCase } from '@application/use-case/heroes-find-all.usecase';
import { PrismaService } from '@infra/database/client/prisma.service';
import { HeroesPrismaRepository } from '@infra/database/repositories/heroes-prisma.repository';
import { Module } from '@nestjs/common';
import { HeroesController } from '@presenters/heroes.controller';

@Module({
    imports: [],
    controllers: [HeroesController],
    providers: [HeroesFindAllUseCase, HeroesCreateUsecase, HeroFindOneUsecase, {
        provide: 'HEROES_REPOSITORY',
        useFactory: (prisma: PrismaService) => {
            return new HeroesPrismaRepository(prisma);
        },
        inject: [PrismaService],
    }],
    exports: [],
})
export class HeroesModule { }
