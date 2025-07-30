import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = new ConfigService();

    app.enableCors();
    app.setGlobalPrefix('api');
    app.use('/static', express.static(join(__dirname, '..', 'static')));

    const port = configService.get<number>('port');
    await app.listen(port ?? 3001);
}
bootstrap();
