import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthUser } from 'src/auth/auth.decorator';
import { Auth } from 'src/auth/auth.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BusinessesService } from 'src/businesses/businesses.service';
import { FinanciersService } from 'src/financiers/financiers.service';
import { PartnershipsService } from 'src/partnerships/partnerships.service';
import { ChequesService } from './cheques.service';
import { CreateChequeDto } from './dto/create-cheque.dto';
import { ReadChequeDto } from './dto/read-cheque.dto';
import { UpdateChequeDto } from './dto/update-cheque.dto';

@UseGuards(JwtAuthGuard)
@Controller('cheques')
export class ChequesController {

    constructor(
        private readonly chequesService: ChequesService,
        private readonly businessesService: BusinessesService,
        private readonly partnershipsService: PartnershipsService,
        private readonly financiersService: FinanciersService,
    ) { }

    @Get('byPage/:pageIndex/:pageSize')
    async getChequesByPage(
        @Param('pageIndex') pageIndex: number,
        @Param('pageSize') pageSize: number,
        @Query('startDate') startDate: string | undefined,
        @Query('endDate') endDate: string | undefined,
        @Query('isPaid') isPaid: string | undefined,
    ): Promise<any> {
        return await this.chequesService.getChequesByPage(pageIndex, pageSize, startDate, endDate, isPaid)
    }

    @Get('byCommercialPageRangeDate/:startDate/:endDate/:commercialId/:pageIndex/:pageSize')
    async byCommercialPage(
        @Param('startDate') startDate: string,
        @Param('endDate') endDate: string,
        @Param('commercialId') commercialId: string,
        @Param('pageIndex') pageIndex: number,
        @Param('pageSize') pageSize: number,
        @Query('payed') payed: boolean,
    ): Promise<ReadChequeDto[]> {
        return await this.chequesService.getChequesByCommercialPage(startDate, endDate, commercialId, pageIndex, pageSize, payed)
    }

    @Get('countCheques')
    async countCheques(
        @Query('isPaid') isPaid: string | undefined,
    ): Promise<number> {
        return await this.chequesService.countCheques(isPaid)
    }

    @Get('byKey/:key')
    async byKey(
        @Param('key') key: string,
    ): Promise<ReadChequeDto[]> {
        const foundBusinesses = await this.businessesService.getBusinessesByKey(key)
        const foundPartnerships = await this.partnershipsService.getPartnershipsByKey(key, [])
        const foundFinanciers = await this.financiersService.getFinanciersByKey(key)

        const foundChuques = await this.chequesService.getChequesByKey(key, foundBusinesses, foundPartnerships, foundFinanciers)
        return foundChuques
    }

    @Get('byId/:chequeId')
    async getChequeById(
        @Param('chequeId') chequeId: string,
    ): Promise<ReadChequeDto> {
        return await this.chequesService.getChequeById(chequeId)
    }

    @Post()
    async create(
        @Body('cheque') cheque: CreateChequeDto,
        @AuthUser() auth: Auth,
    ): Promise<ReadChequeDto> {
        return await this.chequesService.create(cheque, auth)
    }

    @Delete(':chequeId')
    async delete(
        @Param('chequeId') chequeId: string,
    ): Promise<any> {
        return await this.chequesService.delete(chequeId)
    }

    @Put(':chequeId')
    async update(
        @Body('cheque') cheque: UpdateChequeDto,
        @Param('chequeId') chequeId: string,
    ): Promise<void> {
        await this.chequesService.update(cheque, chequeId)
    }

}
