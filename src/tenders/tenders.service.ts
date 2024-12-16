import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tender, TenderDocument } from 'src/schemas/tender.schema';
import { Model } from 'mongoose';
import { ReadTenderDto } from './dto/read-tender.dto';
import { plainToInstance } from 'class-transformer';
import { CreateTenderDto } from './dto/create-tender.dto';
import { UpdateTenderDto } from './dto/update-tender.dto';
import { Auth } from 'src/auth/auth.interface';
import { ReadSuretyDto } from 'src/sureties/dto/read-surety.dto';
import { ReadPartnershipDto } from 'src/partnerships/dto/read-partnership.dto';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

@Injectable()
export class TendersService {

    constructor(
        @InjectModel(Tender.name)
        private readonly tenderModel: Model<TenderDocument>
    ) { }

    async fixCodes() {
        const foundTenders = await this.tenderModel.find().sort('createdAt')
        for (let index = 0; index < foundTenders.length; index++) {
            const tender = foundTenders[index]
            const code = `H${index + 1}-2024`
            Object.assign(tender, { code })
            await this.update(tender, tender._id.toString())
        }
    }

    async generateCode(): Promise<string> {
        const year = new Date().getFullYear()
        const sd = new Date(year, 0, 1)
        const ed = new Date(year, 0, 1)
        let prefix = 'H'
        sd.setHours(0, 0, 0, 0)
        ed.setHours(0, 0, 0, 0)
        ed.setFullYear(ed.getFullYear() + 1)
        const countConstructions = await this.tenderModel.countDocuments({
            createdAt: { $gte: sd, $lt: ed }
        })
        return `${prefix}${countConstructions + 1}-${year}`
    }

    async getTenderById(
        tenderId: string,
    ): Promise<ReadTenderDto> {
        const foundTender = await this.tenderModel.findOne({ _id: tenderId })
            .populate([
                {
                    path: 'business',
                    populate: [
                        'linkedBusinesses',
                        'shareholders',
                        'properties',
                        'movableProperties',
                        'investments',
                        'experiences',
                        'facilityCredits',
                        {
                            path: 'shareholders',
                            populate: ['properties', 'movableProperties', 'incomes', 'investments']
                        },
                    ]
                },
                'payments',
                'sureties',
                'partnership',
                'commercial',
                'beneficiary'
            ])
        if (foundTender) {
            return plainToInstance(ReadTenderDto, foundTender.toObject())
        } else {
            throw new Error('Sin resultados')
        }
    }

    async getTendersByPage(
        pageIndex: number,
        pageSize: number,
        commercialId: string | undefined
    ): Promise<ReadTenderDto[]> {
        const queryObject: any = {}

        if (commercialId) {
            queryObject.commercialId = commercialId
        }

        const foundTenders = await this.tenderModel.find(queryObject)
            .populate(['business', 'partnership', 'commercial'])
            .sort('-createdAt')
            .skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize)
        return plainToInstance(ReadTenderDto, foundTenders.map(e => e.toObject()))
    }

    async getTendersWithoutDocumentation(
        startDate: string | undefined,
        endDate: string | undefined,
        sureties: ReadSuretyDto[] | undefined,
    ): Promise<ReadTenderDto[]> {
        const queryObject: any = {}

        if (startDate && endDate) {
            const sd = new Date(startDate)
            const ed = new Date(endDate)
            sd.setHours(0, 0, 0, 0)
            ed.setHours(0, 0, 0, 0)
            ed.setDate(ed.getDate() + 1)

            queryObject.emitionAt = { $gte: sd, $lt: ed }
        }

        if (sureties) {
            queryObject._id = { $in: sureties.map(e => e.tenderId) }
        }

        const foundTenders = await this.tenderModel.find(queryObject, { code: 1 })
            .populate('nodes')
            .sort('-createdAt')

        const fileTypes = ['ADVANCE', 'PARTNERSHIP', 'TENDER', 'LEGAL', 'BUENAPRO']
        const filterTenders = foundTenders.filter(tender => !fileTypes.every(fileType => tender.nodes.map(node => node.fileType).includes(fileType)))
        return plainToInstance(ReadTenderDto, filterTenders.map(e => e.toObject()))
    }

    async getTendersByPageKey(
        key: string,
        pageIndex: number,
        pageSize: number,
        sureties: ReadSuretyDto[],
        businesses: ReadBusinessDto[],
        partnerships: ReadPartnershipDto[],
        commercialId: string | undefined
    ): Promise<ReadTenderDto[]> {
        const regExp = new RegExp(key, 'i');

        const queryObject: any = {
            $or: [
                { _id: { $in: sureties.map(e => e.tenderId) }, },
                { businessId: { $in: businesses.map(e => e._id) } },
                { partnershipId: { $in: partnerships.map(e => e._id) } },
                { objectDescription: regExp },
                { code: regExp }
            ],
        }

        if (commercialId) {
            queryObject.commercialId = commercialId
        }

        const foundTenders = await this.tenderModel.find(queryObject)
            .populate(['business', 'partnership', 'commercial'])
            .sort('-createdAt')
            .skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize)
        return plainToInstance(ReadTenderDto, foundTenders.map(e => e.toObject()))
    }

    async getCountTenders(): Promise<number> {
        return await this.tenderModel.countDocuments()
    }

    async create(
        tender: CreateTenderDto,
        auth: Auth
    ): Promise<ReadTenderDto> {
        const foundTender = await this.tenderModel.findOne({ objectDescription: tender.objectDescription })
        if (foundTender) {
            throw new Error('Existe una obra con esta misma descripcion de objeto')
        } else {
            const code = await this.generateCode()
            const createdTender = new this.tenderModel({
                ...tender,
                code,
                userId: auth.userId
            })
            const savedTender = await createdTender.save()
            return plainToInstance(ReadTenderDto, savedTender.toObject())
        }
    }

    async update(
        tender: UpdateTenderDto,
        tenderId: string,
    ): Promise<void> {
        await this.tenderModel.updateOne({ _id: tenderId }, tender)
    }

}
