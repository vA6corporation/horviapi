import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OperationSurety, OperationSuretyDocument } from 'src/schemas/operation-surety.schema';
import { CreateOperationSuretyDto } from './dto/create-operation-surety.dto';
import { ReadOperationSuretyDto } from './dto/read-operation-surety.dto';
import { UpdateOperationSuretyDto } from './dto/update-operation-surety.dto';
import { plainToInstance } from 'class-transformer';
import { Auth } from 'src/auth/auth.interface';

@Injectable()
export class OperationSuretiesService {

    constructor(
        @InjectModel(OperationSurety.name)
        private readonly operationSuretyModel: Model<OperationSuretyDocument>
    ) { }

    async getCountOperationSureties(): Promise<number> {
        return this.operationSuretyModel.countDocuments()
    }

    async getOperationSuretyById(operationSuretyId: string): Promise<ReadOperationSuretyDto> {
        const foundOperationSurety = await this.operationSuretyModel.findOne({ _id: operationSuretyId })
            .populate('financier')
        if (foundOperationSurety) {
            return plainToInstance(ReadOperationSuretyDto, foundOperationSurety.toObject())
        } else {
            throw new Error('Sin resultados')
        }
    }

    async getOperationSuretiesByPage(
        pageIndex: number,
        pageSize: number,
    ): Promise<ReadOperationSuretyDto[]> {
        const foundOperationSureties = await this.operationSuretyModel.find()
            .populate('financier')
            .skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize)
            .sort('-createdAt')
            
        return plainToInstance(ReadOperationSuretyDto, foundOperationSureties.map(e => e.toObject()))
    }

    async getOperationSuretiesByOperation(
        operationId: string,
    ): Promise<ReadOperationSuretyDto[]> {
        const foundOperationSureties = await this.operationSuretyModel.find({ operationId })
        return plainToInstance(ReadOperationSuretyDto, foundOperationSureties.map(e => e.toObject()))
    }

    async create(
        operationSurety: CreateOperationSuretyDto,
        auth: Auth,
    ): Promise<ReadOperationSuretyDto> {
        console.log(operationSurety)
        const createdOperationSurety = new this.operationSuretyModel({
            ...operationSurety,
            userId: auth.userId,
        })
        const savedOpeartionSurety = await createdOperationSurety.save()
        return plainToInstance(ReadOperationSuretyDto, savedOpeartionSurety.save())
    }

    async update(
        operationSurety: UpdateOperationSuretyDto,
        operationSuretyId: string,
    ): Promise<void> {
        await this.operationSuretyModel.updateOne({ _id: operationSuretyId }, operationSurety)
    }

}
