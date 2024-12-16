import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommercialDto } from './dto/create-commercial.dto';
import { plainToInstance } from 'class-transformer';
import { ReadCommercialDto } from './dto/read-commercial.dto';
import { UpdateCommercialDto } from './dto/update-commercial.dto';
import { Commercial, CommercialDocument } from 'src/schemas/commercial.schema';

@Injectable()
export class CommercialsService {

    constructor(
        @InjectModel(Commercial.name)
        private readonly commercialModel: Model<CommercialDocument>
    ) { }

    async getCommercials(): Promise<ReadCommercialDto[]> {
        const foundCommercials = await this.commercialModel.find({ deletedAt: null })
            .sort('name')
        return plainToInstance(ReadCommercialDto, foundCommercials.map(e => e.toObject()))
    }

    async getCommercialById(
        commercialId: string,
    ): Promise<ReadCommercialDto> {
        const foundCommercial = await this.commercialModel.findOne({ _id: commercialId })
        if (foundCommercial) {
            return plainToInstance(ReadCommercialDto, foundCommercial.toObject())
        } else {
            throw new Error('Sin resultados')
            
        }
    }

    async getCommercialsByPage(
        pageIndex: number,
        pageSize: number,
        isDeleted: string | undefined
    ): Promise<ReadCommercialDto[]> {
        const queryObject: any = { deletedAt: null }

        if (isDeleted) {
            queryObject.deletedAt = { $ne: null }
        }

        const foundCommercials = await this.commercialModel.find(queryObject)
            .sort('-createdAt')
            .skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize)

        return plainToInstance(ReadCommercialDto, foundCommercials.map(e => e.toObject()))
    }

    async create(commercial: CreateCommercialDto): Promise<ReadCommercialDto> {
        const createdCommercial = new this.commercialModel(commercial)
        const savedCommercial = await createdCommercial.save()
        return plainToInstance(ReadCommercialDto, savedCommercial.toObject())
    }

    async update(commercial: UpdateCommercialDto, commercialId: string): Promise<void> {
        await this.commercialModel.updateOne({ _id: commercialId }, commercial)
    }

}
