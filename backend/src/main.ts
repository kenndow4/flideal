import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import env from './config/env';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  app.enableCors({
    origin: true,
    credentials: true,
  });
  const port = env.port ?? 3000;
   app.useGlobalPipes(
    new ValidationPipe({
     whitelist: true,
     forbidNonWhitelisted: true
    }),
  )
  await app.listen( port,()=>console.log(`Server running in port ${port}`));
}
bootstrap();
