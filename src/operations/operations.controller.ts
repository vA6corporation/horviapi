import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ReadOperationDto } from './dto/read-operation.dto';
import { OperationsService } from './operations.service';
import { CreateOperationDto } from './dto/create-operation.dto';
import { UpdateOperationDto } from './dto/update-operation.dto';

@Controller('operations')
export class OperationsController {

    constructor(
        private readonly operationsService: OperationsService,
    ) { }

    @Get('byId/:operationId')
    async getOperationById(
        @Param('operationId') operationId: string,
    ): Promise<ReadOperationDto> {
        return await this.operationsService.getOperationById(operationId)
    }

    @Get('countOperations')
    async getCountOperations(
        @Query('operationStatus') operationStatus: string | undefined,
    ): Promise<number> {
        return await this.operationsService.getCountOperations(operationStatus)
    }

    @Get('byPage/:pageIndex/:pageSize')
    async getOperationsByPage(
        @Param('pageIndex') pageIndex: number,
        @Param('pageSize') pageSize: number,
        @Query('operationStatus') operationStatus: string | undefined,
    ): Promise<ReadOperationDto[]> {
        return await this.operationsService.getOperationsByPage(pageIndex, pageSize, operationStatus)
    }

    @Post(':seaceId')
    async create(
        @Param('seaceId') seaceId: string,
        @Body('operation') operation: CreateOperationDto,
    ): Promise<ReadOperationDto> {
        const foundOperation = await this.operationsService.getOperationBySeace(seaceId)
        if (foundOperation) {
            throw new Error("La operacion ya fue enviada")
        } else {
            return await this.operationsService.create(operation, seaceId)
        }
    }

    @Put(':operationId')
    async update(
        @Param('operationId') operationId: string,
        @Body('operation') operation: UpdateOperationDto,
    ): Promise<void> {
        await this.operationsService.update(operation, operationId)
    }

}
