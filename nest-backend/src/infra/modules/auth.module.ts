import { AuthService } from '@application/services/auth.service';
import { UsersService } from '@application/services/users.service';
import { AuthGuard } from '@infra/auth/auth.guard';
import { jwtConstants } from '@infra/auth/constants';
import { PrismaService } from '@infra/database/client/prisma.service';
import { UsersPrismaRepository } from '@infra/database/repositories/users-prisma.repository';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from '@presenters/auth.controller';
import ms from 'ms'

@Module({
    controllers: [AuthController],
    providers: [AuthService, UsersService, {
        provide: 'USERS_REPOSITORY',
        useFactory: (prisma: PrismaService) => {
            return new UsersPrismaRepository(prisma);
        },
        inject: [PrismaService]
    }, {
            provide: APP_GUARD,
            useClass: AuthGuard,
        }],
    imports: [
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '5m' },
        }),
    ],
    exports: [AuthService]
})
export class AuthModule { }
