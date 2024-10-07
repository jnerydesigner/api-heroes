import { HeroFindOneUsecase } from '@application/use-case/hero-find-one.usecase';
import { HeroesCreateJsonUseCase } from '@application/use-case/heroes-create-json.usecase';
import { HeroesCreateUsecase } from '@application/use-case/heroes-create.usecase';
import { HeroesDeleteAllUseCase } from '@application/use-case/heroes-delete-all.usecase';
import { HeroesFindAllUseCase } from '@application/use-case/heroes-find-all.usecase';
import { HeroesGenerateJsonUseCase } from '@application/use-case/heroes-generate-json.usecase';
import { HeroesUpdateUseCase } from '@application/use-case/heroes-update.usecase';
import { PrismaService } from '@infra/database/client/prisma.service';
import { HeroesPrismaRepository } from '@infra/database/repositories/heroes-prisma.repository';
import { Module } from '@nestjs/common';
import { HeroesController } from '@presenters/heroes.controller';

@Module({
    imports: [],
    controllers: [HeroesController],
    providers: [HeroesFindAllUseCase, HeroesCreateUsecase, HeroFindOneUsecase, HeroesCreateJsonUseCase, HeroesGenerateJsonUseCase, HeroesDeleteAllUseCase, HeroesUpdateUseCase, {
        provide: 'HEROES_REPOSITORY',
        useFactory: (prisma: PrismaService) => {
            return new HeroesPrismaRepository(prisma);
        },
        inject: [PrismaService],
    }],
    exports: [],
})
export class HeroesModule { }
