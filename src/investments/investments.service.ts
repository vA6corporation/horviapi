import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import { Auth } from 'src/auth/auth.interface';
import { Investment, InvestmentDocument } from 'src/schemas/investment.schema';
import { CreateInvestmentDto } from './dto/create-investment.dto';
import { ReadInvestmentDto } from './dto/read-investment.dto';
import { UpdateInvestmentDto } from './dto/update-investment.dto';

@Injectable()
export class InvestmentsService {

    constructor(
        @InjectModel(Investment.name)
        private readonly investmentModel: Model<InvestmentDocument>
    ) { }

    async getInvestmentById(
        investmentId: string
    ): Promise<ReadInvestmentDto> {
        const foundInvestment = await this.investmentModel.findOne({ _id: investmentId })
        if (foundInvestment) {
            return plainToInstance(ReadInvestmentDto, foundInvestment.toObject())
        } else {
            throw new Error("Sin resultados")
        }
    }

    async getPropertiesByPage(
        pageIndex: number,
        pageSize: number
    ): Promise<ReadInvestmentDto[]> {
        const foundProperties = await this.investmentModel.find()
            .skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize)
            .sort('-createdAt')
        return plainToInstance(ReadInvestmentDto, foundProperties.map(e => e.toObject()))
    }

    async getPropertiesByKey(key: string): Promise<ReadInvestmentDto[]> {
        const regExp = new RegExp(key, 'i')

        const foundProperties = await this.investmentModel.find({
            $or: [
                { type: regExp },
                // { inscription: regExp }
            ]
        })
        return plainToInstance(ReadInvestmentDto, foundProperties.map(e => e.toObject()))
    }

    async getPropertiesCount() {
        return this.investmentModel.countDocuments()
    }

    async create(
        investment: CreateInvestmentDto,
        auth: Auth
    ): Promise<ReadInvestmentDto> {
        const createdInvestment = new this.investmentModel({
            ...investment,
            userId: auth.userId,
        })
        const savedInvestment = await createdInvestment.save()
        return plainToInstance(ReadInvestmentDto, savedInvestment.toObject())
    }

    async update(
        investment: UpdateInvestmentDto,
        investmentId: string
    ): Promise<void> {
        await this.investmentModel.updateOne({ _id: investmentId }, investment)
    }

}
