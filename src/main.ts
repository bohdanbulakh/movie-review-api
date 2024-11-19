import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap () {
  const port = process.env.PORT ?? 3000;
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  app.useGlobalPipes(new ValidationPipe(
    {
      transform: true,
      whitelist: true,
    }
  ));

  const config = new DocumentBuilder()
    .setTitle('Task Manager API')
    .setDescription('System for managing tasks')
    .setVersion('1')
    .addBearerAuth()
    .addCookieAuth('refreshToken')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);

  console.log(`Server started on http://localhost:${port}/api`);
}

bootstrap();
