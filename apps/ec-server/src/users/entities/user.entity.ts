import {
    Column,
    Model,
    Table,
    PrimaryKey,
    AllowNull,
    Length,
    Default,
    Unique,
    DataType,
    CreatedAt,
    UpdatedAt,
    AutoIncrement,
} from 'sequelize-typescript';
import { LENGTH, MESSAGE } from '@elcid-monorepo/constants';

@Table({
    tableName: 'user',
})
export class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: number;

    @Unique({
        msg: MESSAGE.EMAIL_UNIQUE_MSG,
        name: 'email',
    })
    @AllowNull(false)
    @Length({
        max: LENGTH.EMAIL_LENGTH,
        msg: MESSAGE.EMAIL_MAX_LENGTH_MSG,
    })
    @Column(DataType.STRING)
    email: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    password: string;

    @AllowNull(true)
    @Column(DataType.STRING)
    avatar: string;

    @AllowNull(true)
    @Column(DataType.STRING)
    firstName: string;

    @AllowNull(true)
    @Column(DataType.STRING)
    lastName: string;

    @AllowNull(true)
    @Unique({
        msg: MESSAGE.USERNAME_UNIQUE_MSG,
        name: 'email',
    })
    @Column(DataType.STRING)
    username: string;

    @AllowNull(false)
    @Default(true)
    @Column(DataType.BOOLEAN)
    isActive: boolean;

    @AllowNull(false)
    @Default(false)
    @Column(DataType.BOOLEAN)
    isAdmin: boolean;
}
