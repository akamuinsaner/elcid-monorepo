import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    UseGuards,
    Request,
    Res,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { User } from '../users/entities/user.entity';
import { hashPassword } from '@elcid-monorepo/utils';
import { UsersService } from '../users/users.service';
import { Public } from './public';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private usersService: UsersService,
    ) {}

    @Public()
    @HttpCode(HttpStatus.OK)
    @Post('signin')
    async signIn(
        @Body() signInDto: Record<string, any>,
        @Res({ passthrough: true }) response: Response,
    ) {
        const result = await this.authService.signIn(
            signInDto.email,
            signInDto.password,
        );
        response.cookie('userInfo', JSON.stringify(result.userInfo), {
            maxAge: 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        return result;
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req: any) {
        return req.user;
    }

    @Public()
    @Post('signup')
    async signUp(@Body() signUpDto: Pick<User, 'email' | 'password'>) {
        const encryptedPwd = await hashPassword(signUpDto.password);
        return this.usersService.create({
            email: signUpDto.email,
            password: encryptedPwd,
        });
    }
}
