import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthUser } from 'src/auth/auth.decorator';
import { Auth } from 'src/auth/auth.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateFinancierDto } from './dto/create-financier.dto';
import { ReadFinancierDto } from './dto/read-financier.dto';
import { UpdateFinancierDto } from './dto/update-financier.dto';
import { FinanciersService } from './financiers.service';

@UseGuards(JwtAuthGuard)
@Controller('financiers')
export class FinanciersController {

    constructor(
        private readonly financiersService: FinanciersService,
    ) { }

    @Get('byKey/:key')
    async getFinanciersByKey(
        @Param('key') key: string,
    ): Promise<ReadFinancierDto[]> {
        return await this.financiersService.getFinanciersByKey(key)
    }

    @Get('byPage/:pageIndex/:pageSize')
    async getFinanciers(
        @Param('pageIndex') pageIndex: number,
        @Param('pageSize') pageSize: number,
    ): Promise<ReadFinancierDto[]> {
        return await this.financiersService.getFinanciersByPage(pageIndex, pageSize)
    }

    @Get('countFinanciers')
    async getCount(): Promise<number> {
        return await this.financiersService.countFinanciers()
    }

    @Get('byId/:financierId')
    async getFinancierById(
        @Param('financierId') financierId: string
    ): Promise<ReadFinancierDto> {
        return await this.financiersService.getFinancierById(financierId);
    }

    // @Get(':financierId/emitions')
    // async getEmitionsByFinancier(
    //     @Param('financierId') financierId: string
    // ): Promise<ReadFinancierDto | null> {
    //     return await this.financiersService.getFinancierById(financierId);
    // }

    @Post()
    async create(
        @Body('financier') financier: CreateFinancierDto,
        @AuthUser() auth: Auth,
    ): Promise<ReadFinancierDto> {
        try {
            return await this.financiersService.create(financier, auth);
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST);
            }
        }
    }

    @Put(':financierId')
    async update(
        @Body('financier') financier: UpdateFinancierDto,
        @Param('financierId') financierId: string
    ): Promise<void> {
        try {
            await this.financiersService.update(financier, financierId);
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST);
            }
        }
    }
}
