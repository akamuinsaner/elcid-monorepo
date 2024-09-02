import { Body, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { instanceToPlain } from 'class-transformer';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ) {}

    async create(createUserDto: CreateUserDto) {
        return this.userModel.create(instanceToPlain(createUserDto));
    }

    async findAll(): Promise<User[]> {
        return this.userModel.findAll();
    }

    async findById(id: number): Promise<User> {
        return this.userModel.findOne({
            where: {
                id,
            },
        });
    }

    async findByEmail(email: string): Promise<User> {
        return this.userModel.findOne({
            where: {
                email,
            },
        });
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    async remove(id: number): Promise<void> {
        const user = await this.findById(id);
        await user.destroy();
    }
}
