import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule.forRoot()],
            useFactory: (config: ConfigService) => {
                console.log(config);
                return config.get('database');
            },
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule {}
