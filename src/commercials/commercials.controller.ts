import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CommercialsService } from './commercials.service';
import { UpdateCommercialDto } from './dto/update-commercial.dto';
import { ReadCommercialDto } from './dto/read-commercial.dto';
import { CreateCommercialDto } from './dto/create-commercial.dto';

@Controller('commercials')
export class CommercialsController {

    constructor(
        private readonly commercialsService: CommercialsService,
    ) { }

    @Get()
    async getCommercials(): Promise<ReadCommercialDto[]> {
        return await this.commercialsService.getCommercials()
    }

    @Get('byId/:commercialId')
    async getCommercialById(
        @Param('commercialId') commercialId: string,
    ): Promise<ReadCommercialDto> {
        return await this.commercialsService.getCommercialById(commercialId)
    }

    @Get('byPage/:pageIndex/:pageSize')
    async getCommercialsByPage(
        @Param('pageIndex') pageIndex: number,
        @Param('pageSize') pageSize: number,
        @Query('isDeleted') isDeleted: string | undefined
    ): Promise<ReadCommercialDto[]> {
        return await this.commercialsService.getCommercialsByPage(pageIndex, pageSize, isDeleted)
    }

    @Post()
    async create(
        @Body('commercial') commercial: CreateCommercialDto
    ): Promise<ReadCommercialDto> {
        return await this.commercialsService.create(commercial)
    }

    @Put(':commercialId')
    async update(
        @Param('commercialId') commercialId: string,
        @Body('commercial') commercial: UpdateCommercialDto
    ): Promise<void> {
        await this.commercialsService.update(commercial, commercialId)
    }

}
