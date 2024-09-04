/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import csurf from 'csurf';
import { AppModule } from './app/app.module';
import { ResponseInterceptor } from './response.interceptor';
import cookieParser from 'cookie-parser';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    app.enableCors({
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTION'],
        origin: [process.env.ACCOUNT_ORIGIN],
    });
    app.use(cookieParser());
    app.useGlobalInterceptors(new ResponseInterceptor());
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
        }),
    );

    const port = process.env.PORT || 3000;
    await app.listen(port);
    // app.use(csurf());
    Logger.log(
        `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
    );
}

bootstrap();
