import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { UsersService } from 'src/users/users.service';
import { AuthUser } from './auth.decorator';
import { Auth } from './auth.interface';
import { AuthService } from './auth.service';
import { ReadLoginDto } from './dto/read-login.dto';
import { ReadProfileDto } from './dto/read-profile.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UsersService,
    ) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(
        @Req() req: any
    ): Promise<ReadLoginDto> {
        return this.authService.login(req.user)
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async getProfile(
        @AuthUser() auth: Auth,
    ): Promise<ReadProfileDto> {
        const user = await this.usersService.getUserById(auth.userId)
        return plainToInstance(ReadProfileDto, { user })
    }

}
