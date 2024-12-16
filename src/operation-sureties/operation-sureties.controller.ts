import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { OperationSuretiesService } from './operation-sureties.service';
import { CreateOperationSuretyDto } from './dto/create-operation-surety.dto';
import { ReadOperationSuretyDto } from './dto/read-operation-surety.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthUser } from 'src/auth/auth.decorator';
import { Auth } from 'src/auth/auth.interface';
import { UpdateOperationSuretyDto } from './dto/update-operation-surety.dto';

@UseGuards(JwtAuthGuard)
@Controller('operationSureties')
export class OperationSuretiesController {

    constructor(
        private readonly operationSuretiesService: OperationSuretiesService
    ) { }

    @Get('byId/:operationSuretyId')
    async getOperationSuretyById(
        @Param('operationSuretyId') operationSuretyId: string 
    ): Promise<ReadOperationSuretyDto> {
        return this.operationSuretiesService.getOperationSuretyById(operationSuretyId)
    }

    @Get('byPage/:pageIndex/:pageSize')
    async getOperationSuretiesByPage(
        @Param('pageIndex') pageIndex: number,
        @Param('pageSize') pageSize: number,
    ): Promise<ReadOperationSuretyDto[]> {
        return await this.operationSuretiesService.getOperationSuretiesByPage(pageIndex, pageSize)
    }

    @Get('countOperationSureties')
    async getCountOperationSureties(): Promise<number> {
        return await this.operationSuretiesService.getCountOperationSureties()
    }

    @Get('byOperation/:operationId')
    async getOperationSuretiesByOperation(
        @Param('operationId') operationId: string
    ): Promise<ReadOperationSuretyDto[]> {
        return await this.operationSuretiesService.getOperationSuretiesByOperation(operationId)
    }

    @Post()
    async create(
        @Body('operationSurety') operationSuret: CreateOperationSuretyDto,
        @AuthUser() auth: Auth,
    ): Promise<ReadOperationSuretyDto> {
        return await this.operationSuretiesService.create(operationSuret, auth)
    }

    @Put(':operationSuretyId')
    async update(
        @Body('operationSurety') operationSuret: UpdateOperationSuretyDto,
        @Param('operationSuretyId') operationSuretyId: string
    ): Promise<void> {
        await this.operationSuretiesService.update(operationSuret, operationSuretyId)
    }

}
