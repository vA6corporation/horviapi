import { Body, Controller, Delete, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthUser } from 'src/auth/auth.decorator';
import { Auth } from 'src/auth/auth.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { DepositsService } from './deposits.service';
import { CreateDepositDto } from './dto/create-deposit.dto';
import { ReadDepositDto } from './dto/read-deposit.dto';

@UseGuards(JwtAuthGuard)
@Controller('deposits')
export class DepositsController {

    constructor(
        private readonly depositsService: DepositsService,
    ) { }

    @Post()
    async create(
        @Body('deposit') deposit: CreateDepositDto,
        @AuthUser() auth: Auth,
    ): Promise<ReadDepositDto> {
        return await this.depositsService.create(deposit, auth)
    }

    @Put(':depositId')
    async update(
        @Body('deposit') deposit: CreateDepositDto,
        @Param('depositId') depositId: string,
    ): Promise<ReadDepositDto> {
        return await this.depositsService.update(deposit, depositId)
    }

    @Delete(':depositId')
    async delete(
        @Param('depositId') depositId: string,
    ): Promise<any> {
        return await this.depositsService.deleteOne(depositId)
    }
}
