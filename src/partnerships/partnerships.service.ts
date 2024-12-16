import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import { Auth } from 'src/auth/auth.interface';
import { PartnershipItem, PartnershipItemDocument } from 'src/schemas/partnership-item.schema';
import { Partnership, PartnershipDocument } from 'src/schemas/partnership.schema';
import { CreatePartnershipItemDto } from './dto/create-partnership-item.dto';
import { CreatePartnershipDto } from './dto/create-partnership.dto';
import { ReadPartnershipDto } from './dto/read-partnership.dto';
import { UpdatePartnershipDto } from './dto/update-partnership.dto';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

@Injectable()
export class PartnershipsService {

    constructor(
        @InjectModel(Partnership.name)
        private readonly partnershipModel: Model<PartnershipDocument>,
        @InjectModel(PartnershipItem.name)
        private readonly partnershipItemModel: Model<PartnershipItemDocument>
    ) { }

    async getPartnerships() {
        const foundPartnerships = await this.partnershipModel.find().populate(['business'])
        return foundPartnerships.map(partnership => plainToInstance(ReadPartnershipDto, partnership.toObject()))
    }

    async countPartnerships(): Promise<number> {
        return await this.partnershipModel.countDocuments()
    }

    async getPartnershipById(partnershipId: string): Promise<ReadPartnershipDto> {
        const foundPartnership = await this.partnershipModel.findOne({ _id: partnershipId })
            .populate([{ path: 'partnershipItems', populate: 'business' }])
        if (foundPartnership) {
            return plainToInstance(ReadPartnershipDto, foundPartnership.toObject())
        } else {
            throw new Error("Sin resultados")
        }
    }

    async getPartnershipsByKey(
        key: string,
        businesses: ReadBusinessDto[],
    ): Promise<ReadPartnershipDto[]> {
        const regExp = new RegExp(key, 'i')

        const query: any = {
            $or: [
                { businessIds: { $in: businesses.map(e => e._id) } },
                { name: regExp },
                { document: regExp },
            ]
        }

        const foundPartnerships = await this.partnershipModel.find(query).populate([
            'business',
            { path: 'partnershipItems', populate: 'business' }
        ]).limit(100)
        return foundPartnerships.map(partnership => plainToInstance(ReadPartnershipDto, partnership.toObject()))
    }

    async getPartnershipsByPage(
        pageIndex: number,
        pageSize: number,
    ): Promise<ReadPartnershipDto[]> {
        const foundPartnerships = await this.partnershipModel.find()
            .populate('business')
            .sort('-createdAt')
            .skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize)
        return foundPartnerships.map(partnership => plainToInstance(ReadPartnershipDto, partnership.toObject()))
    }

    async create(
        partnership: CreatePartnershipDto,
        partnershipItems: CreatePartnershipItemDto[],
        auth: Auth
    ): Promise<ReadPartnershipDto> {
        const createdPartnership = new this.partnershipModel({
            ...partnership,
            userId: auth.userId,
        })
        const savedPartnership = await createdPartnership.save()
        for (const partnershipItem of partnershipItems) {
            const createdPartnershipItem = new this.partnershipItemModel({
                partnershipId: createdPartnership._id,
                percent: partnershipItem.percent,
                businessId: partnershipItem.businessId,
                userId: createdPartnership.userId
            })
            await createdPartnershipItem.save()
        }
        return plainToInstance(ReadPartnershipDto, savedPartnership.toObject())
    }

    async update(
        partnership: UpdatePartnershipDto,
        partnershipItems: CreatePartnershipItemDto[],
        partnershipId: string
    ): Promise<void> {
        const foundPartnership = await this.partnershipModel.findOne({ _id: partnershipId })
        if (foundPartnership) {
            foundPartnership.set(partnership)
            foundPartnership.save()
            await this.partnershipItemModel.deleteMany({ partnershipId })
            for (const partnershipItem of partnershipItems) {
                const createdPartnershipItem = new this.partnershipItemModel({
                    partnershipId,
                    percent: partnershipItem.percent,
                    businessId: partnershipItem.businessId,
                    userId: foundPartnership.userId
                })
                await createdPartnershipItem.save()
            }
        }
    }

    async delete(partnershipId: string): Promise<void> {
        await this.partnershipModel.deleteOne({ _id: partnershipId })
        await this.partnershipItemModel.deleteMany({ partnershipId })
    }

}
