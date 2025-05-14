import { NestFactory } from '@nestjs/core';
import { AppModule } from './infra/modules/app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new ConfigService();
  const PORT = config.get('PORT_SERVER');
  const logger = new Logger('Init Server');

  app.enableCors({
    origin: '*',
  });

  const imageDirectory = join(process.cwd(), 'src', 'infra', 'data', 'images');
  app.use('/image', express.static(imageDirectory));

  await app.listen(PORT, () => {
    logger.log(`Server running on http://localhost:${PORT}`);
  });
}
bootstrap();
