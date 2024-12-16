import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { TendersService } from './tenders.service';
import { ReadTenderDto } from './dto/read-tender.dto';
import { CreateTenderDto } from './dto/create-tender.dto';
import { UpdateTenderDto } from './dto/update-tender.dto';
import { AuthUser } from 'src/auth/auth.decorator';
import { Auth } from 'src/auth/auth.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BusinessesService } from 'src/businesses/businesses.service';
import { PartnershipsService } from 'src/partnerships/partnerships.service';
import { FinanciersService } from 'src/financiers/financiers.service';
import { BeneficiariesService } from 'src/beneficiaries/beneficiaries.service';
import { SuretiesService } from 'src/sureties/sureties.service';

@UseGuards(JwtAuthGuard)
@Controller('tenders')
export class TendersController {

    constructor(
        private readonly tendersService: TendersService,
        private readonly businessesService: BusinessesService,
        private readonly partnershipsService: PartnershipsService,
        private readonly beneficiariesService: BeneficiariesService,
        private readonly financiersService: FinanciersService,
        private readonly suretiesService: SuretiesService,
    ) { }

    @Get('byId/:tenderId')
    async getTenderById(
        @Param('tenderId') tenderId: string,
    ): Promise<ReadTenderDto> {
        return await this.tendersService.getTenderById(tenderId)
    }

    @Get('countTenders')
    async getCountTenders(): Promise<number> {
        return await this.tendersService.getCountTenders()
    }

    @Get('byPage/:pageIndex/:pageSize')
    async getTendersByPage(
        @Param('pageSize') pageSize: number,
        @Param('pageIndex') pageIndex: number,
        @Query('commercialId') commercialId: string | undefined
    ): Promise<ReadTenderDto[]> {
        return await this.tendersService.getTendersByPage(pageIndex, pageSize, commercialId)
    }

    @Get('withoutDocumentation')
    async getTendersWithoutDocumentation(
        @Query('startDate') startDate: string | undefined,
        @Query('endDate') endDate: string | undefined,
        @Query('financierId') financierId: string | undefined,
    ): Promise<ReadTenderDto[]> {
        if (financierId) {
            const foundSureties = await this.suretiesService.getSuretiesByFinancier(financierId)
            return await this.tendersService.getTendersWithoutDocumentation(startDate, endDate, foundSureties)
        } else {
            return await this.tendersService.getTendersWithoutDocumentation(startDate, endDate, undefined)
        }
    }

    @Get('byPageKey/:pageIndex/:pageSize/:key*')
    async getTendersByPageKey(
        @Param('pageSize') pageSize: number,
        @Param('pageIndex') pageIndex: number,
        @Param('key') key: string,
        @Query('commercialId') commercialId: string | undefined,
    ): Promise<ReadTenderDto[]> {
        const foundBusinesses = await this.businessesService.getBusinessesByKey(key)
        const foundPartnerships = await this.partnershipsService.getPartnershipsByKey(key, foundBusinesses)
        const foundBeneficiaries = await this.beneficiariesService.getBeneficiariesByKey(key)
        const foundFinanciers = await this.financiersService.getFinanciersByKey(key)
        const foundSureties = await this.suretiesService.getSuretiesByKey(key, foundBusinesses, foundPartnerships, foundFinanciers, foundBeneficiaries, commercialId)
        const foundTenders = await this.tendersService.getTendersByPageKey(key, pageIndex, pageSize, foundSureties, foundBusinesses, foundPartnerships, commercialId)
        if (foundTenders.length) {
            return foundTenders
        } else {
            throw new HttpException('Sin resultados', HttpStatus.BAD_REQUEST)
        }
    }

    @Post()
    async create(
        @Body('tender') tender: CreateTenderDto,
        @AuthUser() auth: Auth,
    ): Promise<ReadTenderDto> {
        try {
            return await this.tendersService.create(tender, auth)
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST)
            }
        }
    }

    @Put(':tenderId')
    async update(
        @Param('tenderId') tenderId: string,
        @Body('tender') tender: UpdateTenderDto
    ): Promise<void> {
        await this.tendersService.update(tender, tenderId)
    }

}
