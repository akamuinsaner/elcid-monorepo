import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    UseGuards,
    Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { User } from '../users/entities/user.entity';
import { hashPassword } from '@elcid-monorepo/utils';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private usersService: UsersService,
    ) {}

    @HttpCode(HttpStatus.OK)
    @Post('signin')
    signIn(@Body() signInDto: Record<string, any>) {
        return this.authService.signIn(signInDto.email, signInDto.password);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req: any) {
        return req.user;
    }

    @Post('signup')
    async signUp(@Body() signUpDto: Pick<User, 'email' | 'password'>) {
        const encryptedPwd = await hashPassword(signUpDto.password);
        this.usersService.create({
            email: signUpDto.email,
            password: encryptedPwd,
        });
    }
}
