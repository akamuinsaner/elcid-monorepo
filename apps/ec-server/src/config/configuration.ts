import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { User } from '../users/entities/user.entity';

const configuration: {
    port: number;
    database: SequelizeModuleOptions;
} = {
    port: parseInt(process.env.PORT as string, 10) || 3000,
    database: {
        dialect: 'postgres' as const,
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        autoLoadModels: true,
        models: [User],
    },
};

export default configuration;
