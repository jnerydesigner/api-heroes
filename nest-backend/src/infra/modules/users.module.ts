import { UsersService } from '@application/services/users.service';
import { AuthGuard } from '@infra/auth/auth.guard';
import { PrismaService } from '@infra/database/client/prisma.service';
import { UsersPrismaRepository } from '@infra/database/repositories/users-prisma.repository';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { UsersController } from '@presenters/users.controller';

@Module({
    imports: [],
    controllers: [UsersController],
    providers: [UsersService, {
        provide: 'USERS_REPOSITORY',
        useFactory: (prisma: PrismaService) => {
            return new UsersPrismaRepository(prisma);
        },
        inject: [PrismaService]
    }, {
            provide: APP_GUARD,
            useClass: AuthGuard,
        },],
    exports: [UsersService, 'USERS_REPOSITORY']
})
export class UsersModule { }
