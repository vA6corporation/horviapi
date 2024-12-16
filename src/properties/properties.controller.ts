import { Body, Controller, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { AuthUser } from 'src/auth/auth.decorator';
import { Auth } from 'src/auth/auth.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreatePropertyDto } from './dto/create-property.dto';
import { ReadPropertyDto } from './dto/read-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { PropertiesService } from './properties.service';

@UseGuards(JwtAuthGuard)
@Controller('properties')
export class PropertiesController {

    constructor(
        private readonly propertiesService: PropertiesService,
    ) { }

    @Get('byId/:propertyId')
    async getPropertyById(
        @Param('propertyId') propertyId: string,
    ): Promise<ReadPropertyDto> {
        return await this.propertiesService.getPropertyById(propertyId)
    }

    @Get('byKey')
    async getPropertiesByKey(
        @Query('key') key: string,
    ): Promise<ReadPropertyDto[]> {
        return await this.propertiesService.getPropertiesByKey(key)
    }

    @Get('byPage/:pageIndex/:pageSize')
    async getPropertiesByPage(
        @Param('pageIndex') pageIndex: number,
        @Param('pageSize') pageSize: number
    ): Promise<ReadPropertyDto[]> {
        return await this.propertiesService.getPropertiesByPage(pageIndex, pageSize)
    }

    @Get('count')
    async getPropertiesCount(): Promise<number> {
        return await this.propertiesService.getPropertiesCount()
    }

    @Post()
    async create(
        @Body('property') property: CreatePropertyDto,
        @AuthUser() auth: Auth,
    ): Promise<ReadPropertyDto> {
        return await this.propertiesService.create(property, auth)
    }

    @Put(':propertyId')
    async update(
        @Body('property') property: UpdatePropertyDto,
        @Param('propertyId') propertyId: string,
    ): Promise<void> {
        await this.propertiesService.update(property, propertyId)
    }

}
