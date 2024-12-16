import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import { Business, BusinessDocument } from 'src/schemas/business.schema';
import { Commercial, CommercialDocument } from 'src/schemas/commercial.schema';
import { Seace, SeaceDocument } from 'src/schemas/seace.schema';
import { ReadSeaceDto } from './dto/read-seace.dto';
import { UpdateSeaceDto } from './dto/update-seace.dto';

@Injectable()
export class SeacesService {

    constructor(
        @InjectModel(Seace.name)
        private readonly seaceModel: Model<SeaceDocument>,
        @InjectModel(Commercial.name)
        private readonly commercialModel: Model<CommercialDocument>,
        @InjectModel(Business.name)
        private readonly businessModel: Model<BusinessDocument>,
    ) { }

    async getSeaceById(
        seaceId: string
    ): Promise<ReadSeaceDto> {
        const foundSeace = await this.seaceModel.findOne({ _id: seaceId })
            .populate({ path: 'notification', populate: 'commercial' })
        if (foundSeace) {
            return plainToInstance(ReadSeaceDto, foundSeace.toObject())
        } else {
            throw new Error("Sin resultados")
        }
    }

    async getCountSeaces(
        startDate: string | undefined,
        endDate: string | undefined,
        state: string | undefined,
        objectContracts: string[] | undefined,
        commercialId: string | undefined
    ): Promise<number> {
        const queryObject: any = {}

        if (state) {
            queryObject.state = state
        }

        if (objectContracts && objectContracts.length) {
            queryObject.objectContract = objectContracts
        }

        if (commercialId) {
            queryObject.commercialId = commercialId
        }

        if (startDate && endDate) {
            const sd = new Date(startDate)
            const ed = new Date(endDate)
            sd.setHours(0, 0, 0, 0)
            ed.setHours(0, 0, 0, 0)
            ed.setDate(ed.getDate() + 1)
            queryObject.adjudicatedAt = { $gte: sd, $lt: ed }
        }

        return await this.seaceModel.countDocuments(queryObject)
    }

    async getSeacesByPage(
        pageIndex: number,
        pageSize: number,
        startDate: string | undefined,
        endDate: string | undefined,
        state: string | undefined,
        objectContracts: string[] | undefined,
        commercialId: string | undefined,
        color: string | undefined,
    ): Promise<ReadSeaceDto[]> {
        const queryObject: any = {}

        if (state) {
            queryObject.state = state
        }

        if (objectContracts && objectContracts.length) {
            queryObject.objectContract = objectContracts
        }

        if (commercialId) {
            queryObject.commercialId = commercialId
        }

        if (color) {
            queryObject.color = color
        }

        if (startDate && endDate) {
            const sd = new Date(startDate)
            const ed = new Date(endDate)
            sd.setHours(0, 0, 0, 0)
            ed.setHours(0, 0, 0, 0)
            ed.setDate(ed.getDate() + 1)
            queryObject.adjudicatedAt = { $gte: sd, $lt: ed }
        }

        const foundSeaces = await this.seaceModel.find(queryObject)
            .populate(['notification', 'commercial', 'operation', 'nodes'])
            .skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize)
            .sort('-adjudicatedAt')

        return plainToInstance(ReadSeaceDto, foundSeaces.map(e => e.toObject()))
    }

    async getSeacesByKey(
        key: string,
    ): Promise<ReadSeaceDto[]> {
        let $match: any = {
            $or: [
                { nomenclature: key },
                { winners: { $regex: key } }
            ]
        }

        if (!isNaN(Number(key))) {
            $match = { idProcess: key }
        }

        const $sort: any = { adjudicatedAt: -1 }
        const foundSeaces = await this.seaceModel.aggregate([
            {
                $match
            },
            {
                $sort
            }
        ])
        await this.seaceModel.populate(foundSeaces, 'notification commercial operation nodes')
        return plainToInstance(ReadSeaceDto, foundSeaces)
    }

    async update(seace: UpdateSeaceDto, seaceId: string): Promise<void> {
        await this.seaceModel.updateOne({ _id: seaceId }, seace)
    }

    getCommercial(commercials: any[], seaces: any[]) {
        return commercials.sort((a: any, b: any) => {
            const countA = seaces.filter(e => e.commercialId?.equals(a._id)).length
            const countB = seaces.filter(e => e.commercialId?.equals(b._id)).length
            if (countA > countB) {
                return 1
            }
            if (countA < countB) {
                return -1
            }
            return 0
        })[0]
    }

    async processSeaces() {
        const today = new Date()
        today.setHours(0,0,0,0)
        today.setDate(today.getDate() - 3)
        const foundSeaces = await this.seaceModel.find({ adjudicatedAt: { $gte: today } }, { _id: 1, winners: 1, commercialId: 1, referenceValue: 1 }).sort('referenceValue')
        const foundCommercials = await this.commercialModel.find({ deletedAt: null })
        const filterCommercials = foundCommercials.map(e => e.toObject())
        const foundBusinesses = await this.businessModel.find({}, { document: 1, commercialId: 1 })
        const filterSeaces = foundSeaces.filter(e => e.commercialId === null)

        // for (const commercial of filterCommercials) {
        //     const countSeaces = foundSeaces.filter(e => e.commercialId?.equals(commercial._id)).length
        //     Object.assign(commercial, { countSeaces })
        // }

        for (let index = 0; index < filterSeaces.length; index++) {
            const seace = filterSeaces[index]
            if ((seace.referenceValue || 0) < 200000) {
                continue
            }
            const commercial = this.getCommercial(filterCommercials, foundSeaces)
            const foundBusiness = foundBusinesses.find(business => {
                if (seace.winners.find(e => e.includes(business.document))) {
                    return business
                }
            })

            if (foundBusiness) {
                seace.set({ commercialId: foundBusiness.commercialId })
                seace.save()
            } else {
                seace.set({ commercialId: commercial._id })
                seace.save()
            }
        }
    }

}
