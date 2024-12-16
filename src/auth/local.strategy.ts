import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ReadUserDto } from 'src/users/dto/read-user.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    
    constructor(
        private readonly authService: AuthService
    ) {
        super({ usernameField: 'email' });
    }

    async validate(email: string, password: string): Promise<ReadUserDto> {
        const user = await this.authService.validateUser(email, password)
        if (user) {
            return user
        } else {
            throw new UnauthorizedException()
        }
    }
}