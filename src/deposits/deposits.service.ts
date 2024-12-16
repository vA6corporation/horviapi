import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import { Auth } from 'src/auth/auth.interface';
import { Deposit, DepositDocument } from 'src/schemas/deposit.schema';
import { CreateDepositDto } from './dto/create-deposit.dto';
import { ReadDepositDto } from './dto/read-deposit.dto';

@Injectable()
export class DepositsService {

    constructor(
        @InjectModel(Deposit.name)
        private readonly depositModel: Model<DepositDocument>,
    ) { }

    async create(
        createDepositDto: CreateDepositDto,
        auth: Auth
    ): Promise<ReadDepositDto> {
        const createdDeposit = new this.depositModel({
            ...createDepositDto,
            userId: auth.userId,
        })
        const savedDeposit = await createdDeposit.save()
        return plainToInstance(ReadDepositDto, savedDeposit.toObject())
    }

    async update(deposit: CreateDepositDto, depositId: string) {
        await this.depositModel.updateOne({ _id: depositId }, deposit)
        return plainToInstance(ReadDepositDto, deposit)
    }

    async deleteDepositsBySurety(suretyId: string) {
        await this.depositModel.deleteMany({ suretyId })
    }

    async deleteOne(depositId: string) {
        await this.depositModel.deleteOne({ _id: depositId })
    }

    async updateOffice(suretyIds: any[]) {
        await this.depositModel.updateMany({ suretyId: { $in: suretyIds } })
    }
}
