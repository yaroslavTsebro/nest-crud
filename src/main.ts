import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './config';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';
import { ValidationPipe } from './shared/validation.pipe';
import { AppExceptionFilter } from './shared/app-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(app.get(Logger));
  app.useGlobalInterceptors(new LoggerErrorInterceptor());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AppExceptionFilter(app.get(HttpAdapterHost)));
  await app.listen(PORT);
}
bootstrap();
