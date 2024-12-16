import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import { Auth } from 'src/auth/auth.interface';
import { Income, IncomeDocument } from 'src/schemas/income.schema';
import { Investment, InvestmentDocument } from 'src/schemas/investment.schema';
import { MovableProperty, MovablePropertyDocument } from 'src/schemas/movable-property.schema';
import { Property, PropertyDocument } from 'src/schemas/property.schema';
import { Shareholder, ShareholderDocument } from 'src/schemas/shareholder.schema';
import { CreateShareholderDto } from './dto/create-shareholder.dto';
import { ReadShareholderDto } from './dto/read-shareholder.dto';
import { UpdateShareholderDto } from './dto/update-shareholder.dto';

@Injectable()
export class ShareholdersService {

    constructor(
        @InjectModel(Shareholder.name)
        private readonly shareholderModel: Model<ShareholderDocument>,
        @InjectModel(Property.name)
        private readonly propertyModel: Model<PropertyDocument>,
        @InjectModel(MovableProperty.name)
        private readonly movablePropertyModel: Model<MovablePropertyDocument>,
        @InjectModel(Income.name)
        private readonly incomeModel: Model<IncomeDocument>,
        @InjectModel(Investment.name)
        private readonly investmentModel: Model<InvestmentDocument>,
    ) { }

    async getShareholderById(shareholderId: string): Promise<ReadShareholderDto> {
        const foundShareholder = await this.shareholderModel.findOne({ _id: shareholderId }).populate([
            'properties',
            'movableProperties',
            'incomes',
            'investments',
        ])
        return plainToInstance(ReadShareholderDto, foundShareholder?.toObject())
    }

    async getShareholderByDocument(document: string): Promise<ReadShareholderDto | null> {
        const foundShareholder = await this.shareholderModel.findOne({ document })
        if (foundShareholder) {
            return plainToInstance(ReadShareholderDto, foundShareholder?.toObject())
        } else {
            return null
        }
    }

    async getCountShareholders(): Promise<number> {
        return await this.shareholderModel.countDocuments()
    }

    async getShareholdersByKey(
        key: string,
    ): Promise<ReadShareholderDto[]> {
        const regExp = new RegExp(key, 'i')
        const foundShareholders = await this.shareholderModel.find({ name: regExp })

        return plainToInstance(ReadShareholderDto, foundShareholders.map(e => e.toObject()))
    }

    async getShareholdersByPage(
        pageIndex: number,
        pageSize: number,
    ): Promise<ReadShareholderDto[]> {
        const foundShareholders = await this.shareholderModel.find()
            .skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize)
            .sort('-createdAt')

        return plainToInstance(ReadShareholderDto, foundShareholders.map(e => e.toObject()))
    }

    async create(
        shareholder: CreateShareholderDto,
        auth: Auth
    ): Promise<ReadShareholderDto> {
        const createdShareholder = new this.shareholderModel({
            ...shareholder,
            userId: auth.userId,
        })

        const savedShareholder = await createdShareholder.save()
        return plainToInstance(ReadShareholderDto, savedShareholder.toObject())
    }

    async update(
        shareholder: UpdateShareholderDto,
        shareholderId: string,
    ) {
        await this.shareholderModel.updateOne({ _id: shareholderId }, shareholder)
    }

}
