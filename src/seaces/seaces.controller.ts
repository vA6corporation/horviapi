import { Body, Controller, Get, HttpException, HttpStatus, Param, Put, Query, Res } from '@nestjs/common';
import { SeacesService } from './seaces.service';
import { ReadSeaceDto } from './dto/read-seace.dto';
import { UpdateSeaceDto } from './dto/update-seace.dto';

@Controller('seaces')
export class SeacesController {

    constructor(
        private readonly seacesService: SeacesService
    ) { }

    @Get('byId/:seaceId')
    async getSeaceById(
        @Param('seaceId') seaceId: string,
    ): Promise<ReadSeaceDto> {
        return await this.seacesService.getSeaceById(seaceId)
    }

    @Get('countSeaces')
    async getCountSeaces(
        @Query('startDate') startDate: string | undefined,
        @Query('endDate') endDate: string | undefined,
        @Query('state') state: string | undefined,
        @Query('objectContracts') objectContracts: string[] | undefined,
        @Query('commercialId') commercialId: string | undefined
    ): Promise<number> {
        return await this.seacesService.getCountSeaces(startDate, endDate, state, objectContracts, commercialId)
    }

    @Get('byPage/:pageIndex/:pageSize')
    async getSacesByPage(
        @Param('pageIndex') pageIndex: number,
        @Param('pageSize') pageSize: number,
        @Query('startDate') startDate: string | undefined,
        @Query('endDate') endDate: string | undefined,
        @Query('state') state: string | undefined,
        @Query('objectContracts') objectContracts: string[] | undefined,
        @Query('commercialId') commercialId: string | undefined,
        @Query('color') color: string | undefined,
    ): Promise<ReadSeaceDto[]> {
        return await this.seacesService.getSeacesByPage(pageIndex, pageSize, startDate, endDate, state, objectContracts, commercialId, color)
    }

    @Get('byKey')
    async getSacesByKey(
        @Query('key') key: string,
    ): Promise<ReadSeaceDto[]> {
        const foundSeaces = await this.seacesService.getSeacesByKey(key)
        if (foundSeaces.length) {
            return foundSeaces
        } else {
            throw new HttpException('Sin resultados', HttpStatus.BAD_REQUEST)
        }
    }

    @Get('processSeaces')
    getProcessSeaces(): string {
        this.seacesService.processSeaces()
        return 'procesando seaces'
    }

    @Put(':seaceId')
    async update(
        @Param('seaceId') seaceId: string,
        @Body('seace') seace: UpdateSeaceDto,
    ): Promise<void> {
        await this.seacesService.update(seace, seaceId)
    }

}
