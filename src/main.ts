import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const databaseHost = configService.get<string>('DATABASE_HOST');
  const databasePort = configService.get<number>('DATABASE_PORT');
  console.log(`DATABASE_HOST: ${databaseHost}`);
  console.log(`DATABASE_PORT: ${databasePort}`);
  await app.listen(3000);
}
bootstrap();
