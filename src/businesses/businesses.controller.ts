import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseArrayPipe, Post, Put, Query, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthUser } from 'src/auth/auth.decorator';
import { Auth } from 'src/auth/auth.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BusinessesService } from './businesses.service';
import { CreateBusinessDto } from './dto/create-business.dto';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { ReadBusinessDto } from './dto/read-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';

@UseGuards(JwtAuthGuard)
@Controller('businesses')
export class BusinessesController {

    constructor(
        private readonly businessesService: BusinessesService,
    ) { }

    @Get('byId/:businessId')
    async getBusinessById(
        @Param('businessId') businessId: string
    ): Promise<ReadBusinessDto> {
        return await this.businessesService.getBusinessById(businessId)
    }

    @Get('countBusinesses')
    async getCountBusinesses(
        @Query('isDeleted') isDeleted: string | undefined
    ): Promise<number> {
        return await this.businessesService.getCountBusinesses(isDeleted)
    }

    @Get('byKey/:key')
    async getBusinessesByKey(
        @Param('key') key: string,
    ): Promise<ReadBusinessDto[]> {
        const foundBusinesses = await this.businessesService.getBusinessesByKey(key)
        if (foundBusinesses.length) {
            return foundBusinesses
        } else {
            throw new HttpException('Sin resultados', HttpStatus.BAD_REQUEST)
        }
    }

    @Get('byPage/:pageIndex/:pageSize')
    async getBusinessesByPage(
        @Param('pageIndex') pageIndex: number,
        @Param('pageSize') pageSize: number,
        @Query('isDeleted') isDeleted: string | undefined
    ): Promise<ReadBusinessDto[]> {
        return await this.businessesService.getBusinessesByPage(pageIndex, pageSize, isDeleted)
    }

    @Post()
    async create(
        @Body('business') business: CreateBusinessDto,
        @Body('experiences', new ParseArrayPipe({ items: CreateExperienceDto }))
        experiences: CreateExperienceDto[],
        @AuthUser() auth: Auth,
    ): Promise<ReadBusinessDto> {
        const foundBusiness = await this.businessesService.getBusinessByDocument(business.document)
        if (foundBusiness) {
            throw new HttpException('Ya existe otra empresa con este mismo N° de RUC', HttpStatus.BAD_REQUEST)
        } else {
            return this.businessesService.create(business, experiences, auth)
        }
    }

    @Put(':businessId')
    async update(
        @Param('businessId') businessId: string,
        @Body('business') business: UpdateBusinessDto,
    ): Promise<void> {
        const foundBusiness = await this.businessesService.getBusinessByDocument(business.document)
        if (foundBusiness && foundBusiness._id !== businessId) {
            throw new HttpException('Ya existe otra empresa con este mismo N° de RUC', HttpStatus.BAD_REQUEST)
        } else {
            await this.businessesService.update(business, businessId)
        }
    }

    @Put('withExperiences/:businessId')
    async updateWithExperiences(
        @Param('businessId') businessId: string,
        @Body('business') business: UpdateBusinessDto,
        @Body('experiences', new ParseArrayPipe({ items: CreateExperienceDto }))
        experiences: CreateExperienceDto[],
        @AuthUser() auth: Auth,
    ): Promise<void> {
        const foundBusiness = await this.businessesService.getBusinessByDocument(business.document)
        if (foundBusiness && foundBusiness._id !== businessId) {
            throw new HttpException('Ya existe otra empresa con este mismo N° de RUC', HttpStatus.BAD_REQUEST)
        } else {
            await this.businessesService.updateWithExperiences(business, experiences, auth, businessId)
        }
    }

    @Post('uploadSignature/:businessId')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
        @Param('businessId') businessId: string,
        @UploadedFile() file: Express.Multer.File,
    ): Promise<{ urlSignature: string }> {
        const urlSignature = await this.businessesService.uploadFile(file.buffer, businessId)
        await this.businessesService.updateSignature(urlSignature, businessId)
        console.log(urlSignature)
        return { urlSignature }
    }

}
