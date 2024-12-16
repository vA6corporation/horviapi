import { Body, Controller, Get, Param, ParseArrayPipe, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateTemplateDto } from './dto/create-template.dto';
import { AuthUser } from 'src/auth/auth.decorator';
import { ReadTemplateDto } from './dto/read-template.dto';
import { TemplatesService } from './templates.service';
import { BusinessesService } from 'src/businesses/businesses.service';
import { PartnershipsService } from 'src/partnerships/partnerships.service';
import { Auth } from 'src/auth/auth.interface';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { UpdateGuaranteeDto } from './dto/update-guarantee.dto';

@UseGuards(JwtAuthGuard)
@Controller('templates')
export class TemplatesController {

    constructor(
        private readonly templatesService: TemplatesService,
        private readonly businessesService: BusinessesService,
        private readonly partnershipsService: PartnershipsService,
    ) { }

    @Get('countTemplates')
    async getCountTemplates(): Promise<number> {
        return await this.templatesService.getCountTemplates()
    }

    @Get('byKey/:key')
    async getTemplatesByKey(
        @Param('key') key: string,
    ): Promise<ReadTemplateDto[]> {
        const foundBusinesses = await this.businessesService.getBusinessesByKey(key)
        const foundPartnerships = await this.partnershipsService.getPartnershipsByKey(key, foundBusinesses)
        return await this.templatesService.getTemplatesByKey(foundBusinesses, foundPartnerships)
    }

    @Get('byPage/:pageIndex/:pageSize')
    async getTemplatesByPage(
        @Param('pageIndex') pageIndex: number,
        @Param('pageSize') pageSize: number,
    ): Promise<ReadTemplateDto[]> {
        return await this.templatesService.getTemplatesByPage(pageIndex, pageSize)
    }

    @Get('byId/:templateId')
    async getTemplateById(
        @Param('templateId') templateId: string,
    ): Promise<ReadTemplateDto> {
        return await this.templatesService.getTemplateById(templateId)
    }

    @Post()
    async create(
        @Body('template') template: CreateTemplateDto,
        @Body('guaranties', new ParseArrayPipe({ items: UpdateGuaranteeDto }))
        guaranties: UpdateGuaranteeDto[],
        @AuthUser() auth: Auth,
    ): Promise<ReadTemplateDto> {
        return this.templatesService.create(template, guaranties, auth)
    }

    @Put(':templateId')
    async update(
        @Body('template') template: UpdateTemplateDto,
        @Body('guaranties', new ParseArrayPipe({ items: UpdateGuaranteeDto }))
        guaranties: UpdateGuaranteeDto[],
        @AuthUser() auth: Auth,
        @Param('templateId') templateId: string
    ): Promise<void> {
        await this.templatesService.update(template, guaranties, auth, templateId)
    }

}
