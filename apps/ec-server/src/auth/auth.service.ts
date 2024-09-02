import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { hashPassword } from '@elcid-monorepo/utils';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async signIn(
        email: string,
        pwd: string,
    ): Promise<{ access_token: string }> {
        const user = await this.usersService.findByEmail(email);
        const hashedPwd = await hashPassword(pwd);
        if (user?.password !== hashedPwd) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.id, email: user.email };

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
