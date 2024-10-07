import { HeroesPropsDto } from '@application/dtos/heroes-props.dto';
import { HeroesRepository } from '@domain/repositories/heroes.repository';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { createWriteStream } from 'fs';

import * as path from 'path';

@Injectable()
export class HeroesCreateJsonUseCase {
    private logger = new Logger(HeroesCreateJsonUseCase.name);
    constructor(
        @Inject('HEROES_REPOSITORY')
        private readonly heroesRepository: HeroesRepository
    ) { }
    async execute() {
        const heroes = await this.heroesRepository.findAllJson();
        const filePath = path.join('src', 'infra', 'data', 'heroes.json');
        await this.createJsonFile(filePath, heroes);
    }

    async createJsonFile(filePath: string, data: HeroesPropsDto[]) {
        const writeStream = createWriteStream(filePath);
        writeStream.write(JSON.stringify(data, null, 2));
        writeStream.end();
        writeStream.on('finish', () => {
            this.logger.log(`File JSON created in: ${filePath}`);
        });
        writeStream.on('error', (err) => {
            console.error('Erro ao escrever o arquivo:', err);
        });

    }
}
