import { Body, Controller, Get, Param, Post, Put, UseGuards, Delete } from '@nestjs/common';
import { BanksService } from './banks.service';
import { CreateBankDto } from './dto/create-bank.dto';
import { ReadBankDto } from './dto/read-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthUser } from '../auth/auth.decorator';
import { Auth } from '../auth/auth.interface';

@UseGuards(JwtAuthGuard)
@Controller('banks')
export class BanksController {

    constructor(
        private readonly banksService: BanksService,
    ) { }

    @Get('byId/:bankId')
    async getBankById(
        @Param('bankId') bankId: string,
    ): Promise<ReadBankDto> {
        return await this.banksService.getBankId(bankId)
    }

    @Get('countBanks')
    async getCountBanks(): Promise<number> {
        return await this.banksService.getCountBanks()
    }

    @Get()
    async getBanksByPage(): Promise<ReadBankDto[]> {
        return await this.banksService.getBanks()
    }

    @Post()
    async create(
        @Body('bank') bank: CreateBankDto,
        @AuthUser() auth: Auth
    ): Promise<ReadBankDto> {
        return await this.banksService.create(bank, auth)
    }

    @Put(':bankId')
    async update(
        @Param('bankId') bankId: string,
        @Body('bank') bank: UpdateBankDto
    ): Promise<void> {
        await this.banksService.update(bank, bankId)
    }

    @Delete(':bankId')
    async delete(
        @Param('bankId') bankId: string,
    ): Promise<void> {
        await this.banksService.delete(bankId)
    }

}
