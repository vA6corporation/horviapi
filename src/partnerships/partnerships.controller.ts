import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthUser } from 'src/auth/auth.decorator';
import { Auth } from 'src/auth/auth.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreatePartnershipItemDto } from './dto/create-partnership-item.dto';
import { CreatePartnershipDto } from './dto/create-partnership.dto';
import { ReadPartnershipDto } from './dto/read-partnership.dto';
import { UpdatePartnershipDto } from './dto/update-partnership.dto';
import { PartnershipsService } from './partnerships.service';
import { BusinessesService } from 'src/businesses/businesses.service';

@UseGuards(JwtAuthGuard)
@Controller('partnerships')
export class PartnershipsController {

    constructor(
        private readonly partnershipsService: PartnershipsService,
        private readonly businessesService: BusinessesService,
    ) { }

    @Get()
    async getPartnerships(
        @AuthUser() auth: Auth,
    ): Promise<ReadPartnershipDto[]> {
        return await this.partnershipsService.getPartnerships()
    }

    @Get('byKey/:key')
    async getPartnershipsByKey(
        @Param('key') key: string,
        @AuthUser() auth: Auth,
    ): Promise<ReadPartnershipDto[]> {
        const foundBusinesses = await this.businessesService.getBusinessesByKey(key)
        const foundPartnerships = await this.partnershipsService.getPartnershipsByKey(key, foundBusinesses)
        if (foundPartnerships) {
            return foundPartnerships
        } else {
            throw new HttpException('Sin resultados', HttpStatus.BAD_REQUEST)
        }
    }

    @Get('countPartnerships')
    async getCount(): Promise<number> {
        return await this.partnershipsService.countPartnerships()
    }

    @Get('byId/:partnershipId')
    async getPartnershipById(
        @Param('partnershipId') partnershipId: string,
    ): Promise<ReadPartnershipDto> {
        const foundPartnership = await this.partnershipsService.getPartnershipById(partnershipId)
        if (foundPartnership) {
            return foundPartnership
        } else {
            throw new HttpException("Sin resultados", HttpStatus.BAD_REQUEST)
        }
    }

    @Get('byPage/:pageIndex/:pageSize')
    async getPartnershipsByPage(
        @Param('pageIndex') pageIndex: number,
        @Param('pageSize') pageSize: number,
    ): Promise<ReadPartnershipDto[]> {
        return this.partnershipsService.getPartnershipsByPage(pageIndex, pageSize)
    }

    @Post()
    async create(
        @Body('partnership') partnership: CreatePartnershipDto,
        @Body('partnershipItems') partnershipItems: CreatePartnershipItemDto[],
        @AuthUser() auth: Auth,
    ): Promise<ReadPartnershipDto> {
        try {
            return await this.partnershipsService.create(partnership, partnershipItems, auth)
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST)
            }
        }
    }

    @Put(':partnershipId')
    async update(
        @Body('partnership') partnership: UpdatePartnershipDto,
        @Body('partnershipItems') partnershipItems: CreatePartnershipItemDto[],
        @Param('partnershipId') partnershipId: string,
    ): Promise<void> {
        await this.partnershipsService.update(partnership, partnershipItems, partnershipId)
    }

    @Delete(':partnershipId')
    async delete(
        @Param('partnershipId') partnershipId: string,
    ): Promise<void> {
        await this.partnershipsService.delete(partnershipId)
    }

}
