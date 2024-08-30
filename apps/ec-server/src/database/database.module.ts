import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelizeModuleAsyncOptions } from '../config/sequelizeModuleAsyncOptions';

@Module({
    imports: [SequelizeModule.forRootAsync(sequelizeModuleAsyncOptions)],
})
export class DatabaseModule {}
