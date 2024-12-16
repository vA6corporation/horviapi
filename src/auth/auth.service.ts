import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { plainToInstance } from 'class-transformer';
import { ReadUserDto } from 'src/users/dto/read-user.dto';
import { UsersService } from 'src/users/users.service';
import { ReadLoginDto } from './dto/read-login.dto';

interface PayloadModel {
    sub: string
    name: string
    email: string
    userId: string
    isAdmin: boolean
    commercialId: string | null
}

@Injectable()
export class AuthService {
    
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) { }

    async validateUser(email: string, password: string): Promise<ReadUserDto> {
        const user = await this.usersService.getUserByEmail(email)
        if (user && user.password === password && user.deletedAt === null) {
            return plainToInstance(ReadUserDto, user.toObject())
        } else {
            throw new UnauthorizedException()
        }
    }

    async login(user: ReadUserDto): Promise<ReadLoginDto> {
        const payload: PayloadModel = {
            sub: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            userId: user._id,
            commercialId: user.commercialId,
        }

        return plainToInstance(ReadLoginDto, {
            user,
            accessToken: this.jwtService.sign(payload),
        })
    }

}
