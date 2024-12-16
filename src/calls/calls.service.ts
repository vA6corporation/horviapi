import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Call, CallDocument } from 'src/schemas/call.schema';
import { Model } from 'mongoose'
import { ReadCallDto } from './dto/read-call.dto';
import { CreateCallDto } from './dto/create-call.dto';
import { Auth } from 'src/auth/auth.interface';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class CallsService {

    constructor(
        @InjectModel(Call.name)
        private readonly callModel: Model<CallDocument>
    ) { }

    async getTodayCalls(
        userId: string
    ): Promise<ReadCallDto[]> {
        const foundCalls = await this.callModel.find({ userId })
            .sort('-createdAt')

        return plainToInstance(ReadCallDto, foundCalls.map(e => e.toObject()))
    }

    async getCallsByPage(
        pageIndex: number,
        pageSize: number,
        userId: string
    ): Promise<ReadCallDto[]> {
        const foundCalls = await this.callModel.find({ userId })
            .populate('seace')
            .sort('-createdAt')
            .skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize)

        return plainToInstance(ReadCallDto, foundCalls.map(e => e.toObject()))
    }

    async create(call: CreateCallDto, auth: Auth): Promise<ReadCallDto> {
        const createdCall = new this.callModel({
            ...call,
            userId: auth.userId,
        })
        const savedCall = await createdCall.save()
        return plainToInstance(ReadCallDto, savedCall.toObject())
    }

}
