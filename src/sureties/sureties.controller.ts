import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseArrayPipe, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthUser } from 'src/auth/auth.decorator';
import { Auth } from 'src/auth/auth.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { SuretiesService } from './sureties.service';
import { PartnershipsService } from 'src/partnerships/partnerships.service';
import { FinanciersService } from 'src/financiers/financiers.service';
import { BusinessesService } from 'src/businesses/businesses.service';
import { BeneficiariesService } from 'src/beneficiaries/beneficiaries.service';
import { ReadSuretyDto } from './dto/read-surety.dto';
import { CreateSuretyDto } from './dto/create-surety.dto';
import { UpdateSuretyDto } from './dto/update-surety.dto';
import { CreateChequeDto } from 'src/cheques/dto/create-cheque.dto';
import { CreateDepositDto } from 'src/deposits/dto/create-deposit.dto';

@UseGuards(JwtAuthGuard)
@Controller('sureties')
export class SuretiesController {

    constructor(
        private readonly suretiesService: SuretiesService,
        private readonly partnershipsService: PartnershipsService,
        private readonly financiersService: FinanciersService,
        private readonly businessesService: BusinessesService,
        private readonly beneficiariesService: BeneficiariesService,
    ) { }

    @Get('countSureties')
    async getCountSureties(
        @Query('suretyType') suretyType: string | undefined,
    ): Promise<number> {
        return await this.suretiesService.countSureties(suretyType)
    }

    @Get('byKey/:key*')
    async getSuretiesByKey(
        @Param('key') key: string,
    ): Promise<ReadSuretyDto[]> {
        const foundBusinesses = await this.businessesService.getBusinessesByKey(key)
        const foundPartnerships = await this.partnershipsService.getPartnershipsByKey(key, [])
        const foundFinanciers = await this.financiersService.getFinanciersByKey(key)
        const foundBeneficiaries = await this.beneficiariesService.getBeneficiariesByKey(key)
        const foundSureties = await this.suretiesService.getSuretiesByKey(key, foundBusinesses, foundPartnerships, foundFinanciers, foundBeneficiaries, undefined)

        if (foundSureties.length) {
            return foundSureties
        } else {
            throw new HttpException('Sin resultados', HttpStatus.BAD_REQUEST)
        }
    }

    @Get('byPage/:pageIndex/:pageSize')
    async getSuretiesByPage(
        @Param('pageIndex') pageIndex: number,
        @Param('pageSize') pageSize: number,
        @Query('suretyType') suretyType: string | undefined,
    ): Promise<ReadSuretyDto[]> {
        return await this.suretiesService.getSuretiesByPage(pageIndex, pageSize, suretyType)
    }

    @Get('renovationSureties')
    async getRenovationSureties(): Promise<ReadSuretyDto[]> {
        return await this.suretiesService.getRenovationSureties()
    }

    @Get('withoutDocumentation')
    async getSuretiesWithoutDocumentation(
        @Query('startDate') startDate: string | undefined,
        @Query('endDate') endDate: string | undefined,
        @Query('financierId') financierId: string | undefined,
        @Query('isEmition') isEmition: string | undefined,
        @Query('commercialId') commercialId: string | undefined,
    ): Promise<ReadSuretyDto[]> {
        return await this.suretiesService.getSuretiesWithoutDocumentation(startDate, endDate, financierId, isEmition, commercialId)
    }

    @Get('byTender/:tenderId')
    async getSuretissByTender(
        @Param('tenderId') tenderId: string,
    ): Promise<ReadSuretyDto[]> {
        return await this.suretiesService.getSuretiesByTender(tenderId)
    }

    @Get('byId/:suretyId')
    async getSuretyById(
        @Param('suretyId') suretyId: string
    ): Promise<ReadSuretyDto> {
        try {
            return await this.suretiesService.getSuretyById(suretyId)
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST)
            }
        }
    }

    @Get('summarySureties')
    async getSummarySureties(
        @Query('startDate') startDate: string | undefined,
        @Query('endDate') endDate: string | undefined,
        @Query('commercialId') commercialId: string,
        @Query('financierId') financierId: string,
        @Query('isEmition') isEmition: string,
    ): Promise<any> {
        return await this.suretiesService.getSummarySureties(startDate, endDate, isEmition, financierId, commercialId)
    }

    @Get('collectionSureties')
    async getCollectionSureties(
        @Query('startDate') startDate: string | undefined,
        @Query('endDate') endDate: string | undefined,
        @Query('commercialId') commercialId: string,
        @Query('financierId') financierId: string,
    ): Promise<any> {
        return await this.suretiesService.getCollectionSureties(startDate, endDate, financierId, commercialId)
    }

    @Post()
    async create(
        @Body('surety') surety: CreateSuretyDto,
        @Body('cheques', new ParseArrayPipe({ items: CreateChequeDto }))
        cheques: CreateChequeDto[],
        @Body('deposits', new ParseArrayPipe({ items: CreateDepositDto }))
        deposits: CreateDepositDto[],
        @AuthUser() auth: Auth,
    ): Promise<ReadSuretyDto> {
        try {
            const foundSurety = await this.suretiesService.getSuretyByPolicyNumber(surety.policyNumber)
            if (foundSurety) {
                throw new Error("Existe un fianza con este N° de poliza")
            } else {
                return await this.suretiesService.create(surety, cheques, deposits, auth)
            }
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST)
            }
        }
    }

    @Put(':suretyId')
    async update(
        @Body('surety') surety: UpdateSuretyDto,
        @Param('suretyId') suretyId: string,
    ): Promise<void> {
        await this.suretiesService.update(surety, suretyId)
    }

    @Put('withStatus/:suretyId')
    async updateWithStatus(
        @Body('surety') surety: UpdateSuretyDto,
        @Param('suretyId') suretyId: string,
    ): Promise<void> {
        await this.suretiesService.update(surety, suretyId)
    }

    @Delete(':suretyId')
    async delete(
        @Param('suretyId') suretyId: string,
    ): Promise<void> {
        await this.suretiesService.delete(suretyId)
    }

}
