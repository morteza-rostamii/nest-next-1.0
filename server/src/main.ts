import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// starting point
async function bootstrap() {
  // create an app: passing root: AppModule
  const app = await NestFactory.create(AppModule);
  // running server
  await app.listen(3000);
}
bootstrap();
