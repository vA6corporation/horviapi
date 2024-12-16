import { Body, Controller, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthUser } from 'src/auth/auth.decorator';
import { Auth } from 'src/auth/auth.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateInsuranceDto } from './dto/create-insurance.dto';
import { ReadInsuranceDto } from './dto/read-insurance.dto';
import { UpdateInsuranceDto } from './dto/update-insurance.dto';
import { InsurancesService } from './insurances.service';

@UseGuards(JwtAuthGuard)
@Controller('insurances')
export class InsurancesController {

    constructor(
        private readonly insurancesService: InsurancesService,
    ) { }

    @Get('byId/:insuranceId')
    async getInsuranceById(
        @Param('insuranceId') insuranceId: string,
    ): Promise<ReadInsuranceDto> {
        return await this.insurancesService.getInsuranceById(insuranceId)
    }

    @Get('byInsuranceGroup/:insuranceGroupId')
    async getInsurancesByInsuranceGroupId(
        @Param('insuranceGroupId') insuranceGroupId: string,
    ): Promise<ReadInsuranceDto[]> {
        return await this.insurancesService.getInsurancesByInsuranceGroup(insuranceGroupId)
    }

    @Get('countInsurances')
    async getCountInsurancesByType(
        @Query('insuranceType') insuranceType?: string,
        @Query('commercialId') commercialId?: string,
        @Query('startDate') startDate?: string,
        @Query('endDate') endDate?: string,
    ): Promise<number> {
        return await this.insurancesService.getCountInsurances(insuranceType, commercialId, startDate, endDate)
    }

    @Get('byPage/:pageIndex/:pageSize')
    async getInsurancesByPage(
        @Param('pageIndex') pageIndex: number,
        @Param('pageSize') pageSize: number,
        @Query('insuranceType') insuranceType?: string,
        @Query('commercialId') commercialId?: string,
        @Query('startDate') startDate?: string,
        @Query('endDate') endDate?: string,
    ): Promise<ReadInsuranceDto[]> {
        return await this.insurancesService.getInsurancesByPage(pageIndex, pageSize, insuranceType, commercialId, startDate, endDate)
    }

    @Post()
    async create(
        @Body('insurance') insurance: CreateInsuranceDto,
        @Body('insuranceGroupId') insuranceGroupId: string | null,
        @AuthUser() auth: Auth,
    ): Promise<ReadInsuranceDto> {
        return await this.insurancesService.create(insurance, insuranceGroupId, auth)
    }

    @Put(':insuranceId')
    async update(
        @Param('insuranceId') insuranceId: string,
        @Body('insurance') insurance: UpdateInsuranceDto,
    ): Promise<void> {
        await this.insurancesService.update(insurance, insuranceId)
    }

    @Put('updateOffice/:insuranceId')
    async updateOffice(
        @Param('insuranceId') insuranceId: string,
        @Body('officeId') officeId: string
    ): Promise<void> {
        await this.insurancesService.updateOffice(insuranceId, officeId)
    }

}
