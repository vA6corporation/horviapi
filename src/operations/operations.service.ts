import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import { Operation, OperationDocument } from 'src/schemas/operation.schema';
import { CreateOperationDto } from './dto/create-operation.dto';
import { ReadOperationDto } from './dto/read-operation.dto';
import { UpdateOperationDto } from './dto/update-operation.dto';

@Injectable()
export class OperationsService {

    constructor(
        @InjectModel(Operation.name)
        private readonly operationModel: Model<OperationDocument>
    ) { }

    async getOperationById(operationId: string): Promise<ReadOperationDto> {
        const foundOperation = await this.operationModel.findOne({ _id: operationId })
        if (foundOperation) {
            return plainToInstance(ReadOperationDto, foundOperation.toObject())
        } else {
            throw new Error('Sin resultados')
        }
    }

    async getCountOperations(
        operationStatus: string | undefined,
    ): Promise<number> {
        const queryObject: any = {}

        if (operationStatus) {
            queryObject.operationStatus = operationStatus
        }

        return await this.operationModel.countDocuments(queryObject)
    }

    async getOperationsByPage(
        pageIndex: number,
        pageSize: number,
        operationStatus: string | undefined,
    ): Promise<ReadOperationDto[]> {
        const queryObject: any = {}

        if (operationStatus) {
            queryObject.operationStatus = operationStatus
        }

        const foundOperations = await this.operationModel.find(queryObject)
            .populate('seace')
            .sort('-createdAt')
            .skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize)

        return plainToInstance(ReadOperationDto, foundOperations.map(e => e.toObject()))
    }

    async getOperationBySeace(
        seaceId: string,
    ): Promise<ReadOperationDto | null> {
        const foundOperation = await this.operationModel.findOne({ seaceId })
        if (foundOperation) {
            return plainToInstance(ReadOperationDto, foundOperation.toObject())
        } else {
            return null
        }
    }

    async create(
        operation: CreateOperationDto,
        seaceId: string,
    ): Promise<ReadOperationDto> {
        const createdOperation = new this.operationModel({
            ...operation,
            seaceId,
        })
        const savedOperation = await createdOperation.save()
        return plainToInstance(ReadOperationDto, savedOperation.toObject())
    }

    async update(
        operation: UpdateOperationDto,
        operationId: string,
    ): Promise<void> {
        await this.operationModel.updateOne({ _id: operationId }, operation)
    }

}
