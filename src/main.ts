import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['http://localhost:3000', 'https://www.focusedshares.com'],
    methods: ['GET'],
    maxAge: 3600,
  });
  await app.listen(3000);
}
bootstrap();
