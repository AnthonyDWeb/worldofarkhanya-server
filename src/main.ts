import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(parseInt(process.env.PORT));
}
bootstrap();
