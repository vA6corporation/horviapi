import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { json, urlencoded } from 'express';

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.enableCors()
    app.setGlobalPrefix('api/v1/')
    app.useGlobalPipes(new ValidationPipe({ transform: true }))
    app.use(json({ limit: '5mb' }))
    app.use(urlencoded({ extended: true, limit: '5mb' }))
    await app.listen(process.env.PORT || 3000)
}
bootstrap()
