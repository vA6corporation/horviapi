import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import { Auth } from 'src/auth/auth.interface';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { ReadFinancierDto } from 'src/financiers/dto/read-financier.dto';
import { ReadPartnershipDto } from 'src/partnerships/dto/read-partnership.dto';
import { Cheque, ChequeDocument } from 'src/schemas/cheque.schema';
import { Surety, SuretyDocument } from 'src/schemas/surety.schema';
import { CreateChequeDto } from './dto/create-cheque.dto';
import { ReadChequeDto } from './dto/read-cheque.dto';
import { UpdateChequeDto } from './dto/update-cheque.dto';

@Injectable()
export class ChequesService {

    constructor(
        @InjectModel(Cheque.name)
        private readonly chequeModel: Model<ChequeDocument>,
        @InjectModel(Surety.name)
        private readonly suretyModel: Model<SuretyDocument>,
    ) { }

    async getChequeById(chequeId: string): Promise<ReadChequeDto> {
        const cheque = await this.chequeModel.findOne({ _id: chequeId }).populate('guarantee')
        return plainToInstance(ReadChequeDto, cheque?.toObject())
    }

    async countCheques(isPaid: string | undefined) {
        const queryObject: any = {}

        if (isPaid) {
            if (isPaid === 'true') {
                queryObject.isPaid = true
            } else {
                queryObject.isPaid = false
            }
        }

        return await this.chequeModel.countDocuments(queryObject)
    }

    async softDelete(chequeId: string) {
        await this.chequeModel.updateOne({ _id: chequeId }, { deletedAt: new Date() })
    }

    async delete(chequeId: string) {
        await this.chequeModel.deleteOne({ _id: chequeId })
    }

    async getChequesByKey(
        key: string,
        businesses: ReadBusinessDto[],
        partnerships: ReadPartnershipDto[],
        financiers: ReadFinancierDto[],
    ): Promise<ReadChequeDto[]> {
        const regExp = new RegExp(key, 'i')

        const foundSureties = await this.suretyModel.find({
            $or: [
                { businessId: businesses.map(e => e._id) },
                { partnershipId: partnerships.map(e => e._id) },
                { financierId: financiers.map(e => e._id) },
                { policyNumber: regExp },
            ]
        })

        const foundCheques = await this.chequeModel.find({
            suretyId: foundSureties.map(e => e._id),
        }).populate({ path: 'guarantee', populate: ['business', 'partnership', 'financier'] })

        return plainToInstance(ReadChequeDto, foundCheques.map(e => e.toObject()))
    }

    async getChequesByPage(
        pageIndex: number,
        pageSize: number,
        startDate: string | undefined,
        endDate: string | undefined,
        isPaid: string | undefined,
    ): Promise<ReadChequeDto[]> {
        const queryObject: any = {}

        if (startDate && endDate) {
            const sd = new Date(startDate)
            const ed = new Date(endDate)
            sd.setHours(0, 0, 0, 0)
            ed.setHours(0, 0, 0, 0)
            ed.setDate(ed.getDate() + 1)
            queryObject.$or = [
                { paymentAt: { $gte: sd, $lt: ed } },
                { extensionAt: { $gte: sd, $lt: ed } }
            ]
        }

        if (isPaid) {
            if (isPaid === 'true') {
                queryObject.isPaid = true
            } else {
                queryObject.isPaid = false
            }
        }

        const foundCheques = await this.chequeModel.find(queryObject).populate({
            path: 'surety', populate: ['business', 'partnership', 'financier']
        }).skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize)
            .sort('paymentAt')

        return plainToInstance(ReadChequeDto, foundCheques.map(e => e.toObject()))
    }

    async getChequesByCommercialPage(
        startDate: string,
        endDate: string,
        commercialId: string,
        pageIndex: number,
        pageSize: number,
        isPaid: boolean,
    ): Promise<ReadChequeDto[]> {

        const sd = new Date(startDate)
        const ed = new Date(endDate)
        sd.setHours(0, 0, 0, 0)
        ed.setHours(0, 0, 0, 0)
        ed.setDate(ed.getDate() + 1)

        const foundSureties = await this.suretyModel.find({ commercialId }, { _id: 1 })

        const foundCheques = await this.chequeModel.find({
            isPaid,
            guaranteeId: foundSureties.map(e => e._id),
            $or: [
                { paymentAt: { $gte: sd, $lt: ed } },
                { extensionAt: { $gte: sd, $lt: ed } }
            ]
        }).populate({ path: 'guarantee', populate: ['business', 'partnership', 'financier'] })
            .sort('paymentAt')
            .skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize)
        return plainToInstance(ReadChequeDto, foundCheques.map(e => e.toObject()))
    }

    async deleteChequesByGuaranteeId(guaranteeId: string) {
        await this.chequeModel.deleteMany({ guaranteeId })
    }

    async create(createChequeDto: CreateChequeDto, auth: Auth): Promise<ReadChequeDto> {
        const createdCheque = new this.chequeModel({
            ...createChequeDto,
            userId: auth.userId
        })
        const savedCheque = await createdCheque.save()
        return plainToInstance(ReadChequeDto, savedCheque)
    }

    async update(cheque: UpdateChequeDto, chequeId: string) {
        await this.chequeModel.updateOne({ _id: chequeId }, cheque)
    }

}
