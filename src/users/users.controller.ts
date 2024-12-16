import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthUser } from 'src/auth/auth.decorator';
import { Auth } from 'src/auth/auth.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { ReadUserDto } from './dto/read-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService,
    ) { }

    @Get()
    async getUsers(): Promise<ReadUserDto[]> {
        return await this.usersService.getUsers()
    }

    @Get('byPage/:pageIndex/:pageSize')
    async getUsersByPage(
        @Param('pageIndex') pageIndex: number,
        @Param('pageSize') pageSize: number,
        @Query('isDeleted') isDeleted: string,
    ): Promise<ReadUserDto[]> {
        console.log(isDeleted)
        return await this.usersService.getUsersByPage(pageIndex, pageSize, isDeleted)
    }

    @Get('byKey/:key')
    async getUsersByKey(
        @Param('key') key: string,
    ): Promise<ReadUserDto[]> {
        const foundUsers = await this.usersService.getUsersByKey(key)
        if (foundUsers.length) {
            return foundUsers
        } else {
            throw new HttpException('Sin resultados', HttpStatus.BAD_REQUEST)
        }
    }

    @Get('countUsers')
    async getCountUsers(): Promise<number> {
        return await this.usersService.countUsers()
    }

    @Get(':userId')
    async getUserById(
        @Param('userId') userId: string
    ): Promise<ReadUserDto> {
        return await this.usersService.getUserById(userId)
    }

    @Post()
    async create(
        @Body('user') createUserDto: CreateUserDto,
        @AuthUser() auth: Auth,
    ): Promise<ReadUserDto> {
        try {
            const foundUser = await this.usersService.getUserByEmail(createUserDto.email)
            if (foundUser) {
                throw new Error('Existe un usuario con este mismo email')
            } else {
                return await this.usersService.create(createUserDto)
            }
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST)
            }
        }
    }

    @Put(':userId')
    async update(
        @Body('user') updateUserDto: UpdateUserDto,
        @Param('userId') userId: string
    ): Promise<ReadUserDto> {
        try {
            return await this.usersService.update(updateUserDto, userId)
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST)
            }
        }
    }
}
