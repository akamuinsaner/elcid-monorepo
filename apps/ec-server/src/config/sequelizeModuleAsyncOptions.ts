import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configuration';
import {
    SequelizeModuleAsyncOptions,
    SequelizeModuleOptions,
} from '@nestjs/sequelize';

export const sequelizeModuleAsyncOptions: SequelizeModuleAsyncOptions = {
    imports: [ConfigModule.forRoot()],
    useFactory: async (): Promise<SequelizeModuleOptions> => {
        return configuration.database;
    },
    inject: [ConfigService],
};
