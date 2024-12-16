import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthUser } from 'src/auth/auth.decorator';
import { Auth } from 'src/auth/auth.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateShareholderDto } from './dto/create-shareholder.dto';
import { ReadShareholderDto } from './dto/read-shareholder.dto';
import { ShareholdersService } from './shareholders.service';
import { UpdateShareholderDto } from './dto/update-shareholder.dto';

@UseGuards(JwtAuthGuard)
@Controller('shareholders')
export class ShareholdersController {

    constructor(
        private readonly shareholdersService: ShareholdersService,
    ) { }

    @Get('byId/:shareholderId')
    async getShareholderById(
        @Param('shareholderId') shareholderId: string
    ): Promise<ReadShareholderDto> {
        return await this.shareholdersService.getShareholderById(shareholderId)
    }

    @Get('byKey/:key*')
    async getShareholdersByKey(
        @Param('key') key: string
    ): Promise<ReadShareholderDto[]> {
        return await this.shareholdersService.getShareholdersByKey(key)
    }

    @Get('countShareholders')
    async getCountShareholders(
    ): Promise<number> {
        return await this.shareholdersService.getCountShareholders()
    }

    @Get('byPage/:pageIndex/:pageSize')
    async getShareholders(
        @Param('pageIndex') pageIndex: number,
        @Param('pageSize') pageSize: number,
    ): Promise<ReadShareholderDto[]> {
        return await this.shareholdersService.getShareholdersByPage(pageIndex, pageSize)
    }

    @Post()
    async create(
        @Body('shareholder') shareholder: CreateShareholderDto,
        @AuthUser() auth: Auth,
    ): Promise<ReadShareholderDto> {
        const foundShareholder = await this.shareholdersService.getShareholderByDocument(shareholder.document)
        if (foundShareholder) {
            throw new HttpException('Existe un accionista con este mismo documento', HttpStatus.BAD_REQUEST)
        } else {
            return await this.shareholdersService.create(shareholder, auth)
        }
    }

    @Put(':shareholderId')
    async update(
        @Body('shareholder') shareholder: UpdateShareholderDto,
        @Param('shareholderId') shareholderId: string,
    ): Promise<void> {
        await this.shareholdersService.update(shareholder, shareholderId)
    }

}
