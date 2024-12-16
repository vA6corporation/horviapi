import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import { CreateBankDto } from './dto/create-bank.dto';
import { ReadBankDto } from './dto/read-bank.dto';
import { UpdateBankDto } from './dto/update-bank.dto';
import { Bank, BankDocument } from '../schemas/bank.schema';
import { Auth } from '../auth/auth.interface';

@Injectable()
export class BanksService {

    constructor(
        @InjectModel(Bank.name)
        private readonly bankModel: Model<BankDocument>,
    ) { }

    async getBankId(bankId: string): Promise<ReadBankDto> {
        const foundBank = await this.bankModel.findOne({ _id: bankId })
        return plainToInstance(ReadBankDto, foundBank?.toObject())
    }

    async getCountBanks(): Promise<number> {
        return await this.bankModel.countDocuments()
    }

    async getBanks(): Promise<ReadBankDto[]> {
        const foundBanks = await this.bankModel.find()
        return foundBanks.map(e => plainToInstance(ReadBankDto, e.toObject()))
    }

    async create(bank: CreateBankDto, auth: Auth) {
        const createdBank = new this.bankModel(bank)

        const savedBank = await createdBank.save()
        return plainToInstance(ReadBankDto, savedBank.toObject())
    }

    async update(bank: UpdateBankDto, bankId: string): Promise<void> {
        await this.bankModel.updateOne({ _id: bankId }, bank);
    }

    async delete(bankId: string) {
        await this.bankModel.deleteOne({ _id: bankId })
    }

}
