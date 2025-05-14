import { AppService } from '@application/use-case/app.service';
import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { AppController } from '@presenters/app.controller';
import { HeroesModule } from './heroes.module';

import { DatabaseModule } from './database.module';
import { AuthModule } from './auth.module';
import { UsersModule } from './users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    HeroesModule,
    DatabaseModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
