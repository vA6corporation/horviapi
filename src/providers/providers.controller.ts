import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthUser } from '../auth/auth.decorator';
import { Auth } from '../auth/auth.interface';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateProviderDto } from './dto/create-provider.dto';
import { ReadProviderDto } from './dto/read-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { ProvidersService } from './providers.service';

@UseGuards(JwtAuthGuard)
@Controller('providers')
export class ProvidersController {

    constructor(
        private readonly providersService: ProvidersService,
    ) { }

    @Get('byKey/:key')
    async getProvidersByAny(
        @Param('key') key: string,
    ): Promise<ReadProviderDto[]> {
        const foundProviders = await this.providersService.getProvidersByKey(key)
        if (foundProviders.length) {
            return foundProviders
        } else {
            throw new HttpException('Sin resultados', HttpStatus.NOT_FOUND)
        }
    }

    @Get('byMobile/:mobile')
    async getProvidersByMobile(
        @Param('mobile') mobile: string,
    ): Promise<ReadProviderDto[]> {
        const foundProviders = await this.providersService.getProvidersByMobile(mobile)
        if (foundProviders.length) {
            return foundProviders
        } else {
            throw new HttpException('Sin resultados', HttpStatus.NOT_FOUND)
        }
    }

    @Get('byPage/:pageIndex/:pageSize')
    async getProviders(
        @Param('pageIndex') pageIndex: number,
        @Param('pageSize') pageSize: number,
    ): Promise<ReadProviderDto[]> {
        return await this.providersService.getProvidersByPage(pageIndex, pageSize)
    }

    @Get('countProviders')
    async getCountProviders(): Promise<number> {
        return await this.providersService.countProviders()
    }

    @Get('byId/:providerId')
    async getProviderById(
        @Param('providerId') providerId: string,
    ): Promise<ReadProviderDto> {
        try {
            return await this.providersService.getProviderById(providerId)
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST)
            }
        }
    }

    @Get('byRuc/:ruc')
    async getByRuc(
        @Param('ruc') ruc: string,
    ): Promise<ReadProviderDto[]> {
        try {
            return await this.providersService.getByRuc(ruc)
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST)
            }
        }
    }

    @Get('byDni/:dni')
    async getByDni(
        @Param('dni') dni: string,
    ): Promise<ReadProviderDto[]> {
        try {
            return await this.providersService.getByDni(dni)
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST)
            }
        }
    }

    @Post()
    async create(
        @Body('provider') provider: CreateProviderDto,
        @AuthUser() auth: Auth
    ): Promise<ReadProviderDto> {
        try {
            return await this.providersService.create(provider, auth)
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST)
            }
        }
    }

    @Put(':providerId')
    async update(
        @Body('provider') provider: UpdateProviderDto,
        @Param('providerId') providerId: string,
    ): Promise<void> {
        try {
            await this.providersService.update(provider, providerId)
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST)
            }
        }
    }

    @Delete(':providerId')
    async delete(
        @Param('providerId') providerId: string,
    ): Promise<void> {
        try {
            await this.providersService.softDelete(providerId)
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST)
            }
        }
    }

}
