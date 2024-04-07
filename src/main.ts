import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const PORT = process.env.PORT || 3000;

  console.log(`App running on port ${PORT}, in ${process.env.NODE_ENV} mode`);

  await app.listen(3000);
}
bootstrap();
