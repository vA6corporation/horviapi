import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model, Types } from 'mongoose';
import { Auth } from 'src/auth/auth.interface';
import { ReadBeneficiaryDto } from 'src/beneficiaries/dto/read-beneficiary.dto';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { CreateChequeDto } from 'src/cheques/dto/create-cheque.dto';
import { CreateDepositDto } from 'src/deposits/dto/create-deposit.dto';
import { ReadFinancierDto } from 'src/financiers/dto/read-financier.dto';
import { ReadPartnershipDto } from 'src/partnerships/dto/read-partnership.dto';
import { Cheque, ChequeDocument } from 'src/schemas/cheque.schema';
import { Deposit, DepositDocument } from 'src/schemas/deposit.schema';
import { Payment, PaymentDocument } from 'src/schemas/payment.schema';
import { Surety, SuretyDocument, SuretyStatus, SuretyStatusUpdate, SuretyStatusUpdateDocument, SuretyType } from 'src/schemas/surety.schema';
import { Tender, TenderDocument } from 'src/schemas/tender.schema';
import { CreateSuretyDto } from './dto/create-surety.dto';
import { ReadSuretyDto } from './dto/read-surety.dto';
import { UpdateSuretyDto } from './dto/update-surety.dto';

@Injectable()
export class SuretiesService {

    constructor(
        @InjectModel(Surety.name)
        private readonly suretyModel: Model<SuretyDocument>,
        @InjectModel(Tender.name)
        private readonly tenderModel: Model<TenderDocument>,
        @InjectModel(Payment.name)
        private readonly paymentModel: Model<PaymentDocument>,
        @InjectModel(SuretyStatusUpdate.name)
        private readonly suretyStatusUpdateModel: Model<SuretyStatusUpdateDocument>,
        @InjectModel(Cheque.name)
        private readonly chequeModel: Model<ChequeDocument>,
        @InjectModel(Deposit.name)
        private readonly depositModel: Model<DepositDocument>,
    ) { }

    async getSuretiesByKey(
        key: string,
        businesses: ReadBusinessDto[],
        partnerships: ReadPartnershipDto[],
        financiers: ReadFinancierDto[],
        beneficiaries: ReadBeneficiaryDto[],
        commercialId: string | undefined,
    ): Promise<ReadSuretyDto[]> {
        const regExp = new RegExp(key, 'i');

        const query: any = {
            $or: [
                { businessId: businesses.map(e => e._id) },
                { partnershipId: partnerships.map(e => e._id) },
                { financierId: financiers.map(e => e._id) },
                { beneficiaryId: beneficiaries.map(e => e._id) },
                { policyNumber: regExp },
            ]
        };

        if (commercialId) {
            query.commercialId = commercialId
        }

        const foundSuretys = await this.suretyModel.find(query).populate([
            'business',
            'partnership',
            'financier',
            'tender',
        ]).limit(200)
            .sort('policyNumber')
        return plainToInstance(ReadSuretyDto, foundSuretys.map(e => e.toObject()))
    }

    async getSuretiesByFinancier(
        financierId: string,
    ): Promise<ReadSuretyDto[]> {
        const foundSuretys = await this.suretyModel.find({ financierId })
        return plainToInstance(ReadSuretyDto, foundSuretys)
    }

    async getSummarySureties(
        startDate: string | undefined,
        endDate: string | undefined,
        isEmition: string,
        financierId: string,
        commercialId: string,
    ): Promise<any> {
        const queryObject: any = {}

        if (isEmition === 'true') {
            queryObject.isEmition = true
        }

        if (isEmition === 'false') {
            queryObject.isEmition = false
        }

        const sureties = await this.suretyModel.find(queryObject, { _id: 1 })

        const $match: any = {
            suretyStatus: { $ne: SuretyStatus.FREE },
            _id: { $in: sureties.map(e => e._id) }
        }

        if (startDate && endDate) {
            const sd = new Date(startDate)
            const ed = new Date(endDate)
            sd.setHours(0, 0, 0, 0)
            ed.setHours(0, 0, 0, 0)
            ed.setDate(ed.getDate() + 1)
            $match.startAt = { $gte: sd, $lt: ed }
        }

        if (commercialId) {
            $match.commercialId = new Types.ObjectId(commercialId)
        }

        if (financierId) {
            $match.financierId = new Types.ObjectId(financierId)
        }

        const $group = {
            _id: null,
            emitionPrice: {
                $sum: {
                    $switch: {
                        branches: [
                            { case: '$isEmition', then: '$price' },
                        ],
                        default: 0,
                    }
                }
            },
            emitionPrima: {
                $sum: {
                    $switch: {
                        branches: [
                            { case: '$isEmition', then: '$prima' },
                        ],
                        default: 0,
                    }
                }
            },
            emitionCount: {
                $sum: {
                    $switch: {
                        branches: [
                            { case: '$isEmition', then: 1 },
                        ],
                        default: 0,
                    }
                }
            },
            renovationPrice: {
                $sum: {
                    $switch: {
                        branches: [
                            { case: { $eq: ['$isEmition', false] }, then: '$price' },
                        ],
                        default: 0,
                    }
                }
            },
            renovationPrima: {
                $sum: {
                    $switch: {
                        branches: [
                            { case: { $eq: ['$isEmition', false] }, then: '$prima' },
                        ],
                        default: 0,
                    }
                }
            },
            renovationCount: {
                $sum: {
                    $switch: {
                        branches: [
                            { case: { $eq: ['$isEmition', false] }, then: 1 },
                        ],
                        default: 0,
                    }
                }
            },
        }

        const materialQuery = this.suretyModel.aggregate([
            { $match: { ...$match, suretyType: SuretyType.MATERIAL } },
            { $group }
        ])

        const complianceQuery = this.suretyModel.aggregate([
            { $match: { ...$match, suretyType: SuretyType.COMPLIANCE } },
            { $group }
        ])

        const directQuery = this.suretyModel.aggregate([
            { $match: { ...$match, suretyType: SuretyType.DIRECT } },
            { $group }
        ])

        const promises = await Promise.all([materialQuery, complianceQuery, directQuery])

        return {
            material: promises[0][0] || {
                emitionPrice: 0,
                emitionPrima: 0,
                emitionCount: 0,
                renovationPrice: 0,
                renovationPrima: 0,
                renovationCount: 0,
            },
            compliance: promises[1][0] || {
                emitionPrice: 0,
                emitionPrima: 0,
                emitionCount: 0,
                renovationPrice: 0,
                renovationPrima: 0,
                renovationCount: 0,
            },
            direct: promises[2][0] || {
                emitionPrice: 0,
                emitionPrima: 0,
                emitionCount: 0,
                renovationPrice: 0,
                renovationPrima: 0,
                renovationCount: 0,
            }
        }
    }

    async getCollectionSureties(
        startDate: string | undefined,
        endDate: string | undefined,
        financierId: string,
        commercialId: string,
    ): Promise<any> {
        const queryObject: any = {}

        const sureties = await this.suretyModel.find(queryObject, { _id: 1 })

        const matchSurety: any = {
            suretyStatus: { $ne: SuretyStatus.FREE },
            _id: { $in: sureties.map(e => e._id) }
        }

        const matchPayment: any = {
            onModel: 'Surety'
        }

        if (startDate && endDate) {
            const sd = new Date(startDate)
            const ed = new Date(endDate)
            sd.setHours(0, 0, 0, 0)
            ed.setHours(0, 0, 0, 0)
            ed.setDate(ed.getDate() + 1)
            matchSurety.startAt = { $gte: sd, $lt: ed }
            matchPayment.paymentAt = { $gte: sd, $lt: ed }
        }

        if (commercialId) {
            matchSurety.commercialId = new Types.ObjectId(commercialId)
        }

        if (financierId) {
            matchSurety.financierId = new Types.ObjectId(financierId)
        }

        const $group = {
            _id: null,
            total: {
                $sum: '$prima'
            }
        }

        const totalSurety = await this.suretyModel.aggregate([
            { $match: matchSurety },
            { $group }
        ])

        const totalPayment = await this.paymentModel.aggregate([
            { $match: matchPayment },
            {
                $group: {
                    _id: null, totalCollection: { $sum: '$charge' }
                }
            }
        ])

        return {
            total: totalSurety[0]?.total || 0,
            totalCollection: totalPayment[0]?.totalCollection || 0
        }
    }

    async create(
        surety: CreateSuretyDto,
        cheques: CreateChequeDto[],
        deposits: CreateDepositDto[],
        auth: Auth,
    ): Promise<ReadSuretyDto> {
        const createdSurety = new this.suretyModel({
            ...surety,
            userId: auth.userId,
        })

        const createdCheques: ChequeDocument[] = []
        const createdDeposits: DepositDocument[] = []

        for (const cheque of cheques) {
            const createdCheque = new this.chequeModel({
                ...cheque,
                userId: auth.userId,
                suretyId: createdSurety._id
            })
            createdCheques.push(createdCheque)
        }

        for (const deposit of deposits) {
            const createdDeposit = new this.depositModel({
                ...deposit,
                userId: auth.userId,
                suretyId: createdSurety._id
            })
            createdDeposits.push(createdDeposit)
        }

        await this.chequeModel.insertMany(createdCheques)
        await this.depositModel.insertMany(createdDeposits)

        const savedSurety = await createdSurety.save()
        return plainToInstance(ReadSuretyDto, savedSurety.toObject())
    }

    async getSuretyByPolicyNumber(policyNumber: string): Promise<ReadSuretyDto | null> {
        const foundSurety = await this.suretyModel.findOne({ policyNumber })
        if (foundSurety) {
            return plainToInstance(ReadSuretyDto, foundSurety.toObject())
        } else {
            return null
        }
    }

    async update(
        surety: UpdateSuretyDto,
        suretyId: string
    ): Promise<void> {
        await this.suretyModel.updateOne({ _id: suretyId }, surety)
    }

    async updateWithStatus(
        surety: UpdateSuretyDto,
        suretyId: string
    ): Promise<void> {
        const foundSurety = await this.suretyModel.findOne({ _id: suretyId })
        if (foundSurety) {
            const suretyStatusUpdate = new this.suretyStatusUpdateModel({ suretyStatus: surety.suretyStatus })
            foundSurety.suretyStatusUpdates.push(suretyStatusUpdate)
            foundSurety.set(surety)
            await foundSurety.save()
        }
    }

    async countSureties(suretyType: string | undefined): Promise<number> {
        const queryObject: any = {}

        if (suretyType) {
            queryObject.suretyType = suretyType
        }

        return this.suretyModel.countDocuments(queryObject)
    }

    async getSuretyById(suretyId: string): Promise<ReadSuretyDto> {
        const foundSurety = await this.suretyModel.findById(suretyId)
            .populate([
                'business',
                'financier',
                'beneficiary',
                'commercial',
                'cheques',
                'deposits',
                { path: 'payments', match: { deletedAt: null } },
                { path: 'partnership', populate: 'business' },
                { path: 'tender', populate: ['business', 'partnership'] },
            ])

        if (foundSurety) {
            return plainToInstance(ReadSuretyDto, foundSurety.toObject())
        } else {
            throw new Error("Sin resultados")
        }
    }

    async getSuretiesByPage(
        pageIndex: number,
        pageSize: number,
        suretyType: string | undefined
    ): Promise<ReadSuretyDto[]> {
        const queryObject: any = {}

        if (suretyType) {
            queryObject.suretyType = suretyType
        }

        const foundSuretys = await this.suretyModel.find(queryObject)
            .populate(['business', 'partnership', 'financier'])
            .skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize)
            .sort('-createdAt')
        return plainToInstance(ReadSuretyDto, foundSuretys.map(e => e.toObject()))
    }

    async getRenovationSureties(): Promise<ReadSuretyDto[]> {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        today.setDate(today.getDate() + 60)

        const groupSureties = await this.suretyModel.aggregate([
            {
                $group: { _id: '$tenderId', items: { $push: { _id: '$_id', createdAt: '$createdAt', suretyType: '$suretyType' } } }
            }
        ])

        const suretyIds: any[] = []

        for (const group of groupSureties) {
            const maxMaterial = group.items.filter(e => e.suretyType == SuretyType.MATERIAL).sort((a: any, b: any) => {
                if (new Date(a.createdAt).getTime() < new Date(b.createdAt).getTime()) {
                    return 1
                }
                if (new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime()) {
                    return -1
                }
                return 0
            })[0]
            if (maxMaterial) {
                suretyIds.push(maxMaterial._id)
            }

            const maxDirect = group.items.filter(e => e.suretyType == SuretyType.DIRECT).sort((a: any, b: any) => {
                if (new Date(a.createdAt).getTime() < new Date(b.createdAt).getTime()) {
                    return 1
                }
                if (new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime()) {
                    return -1
                }
                return 0
            })[0]
            if (maxDirect) {
                suretyIds.push(maxDirect._id)
            }

            const maxCompliance = group.items.filter(e => e.suretyType == SuretyType.COMPLIANCE).sort((a: any, b: any) => {
                if (new Date(a.createdAt).getTime() < new Date(b.createdAt).getTime()) {
                    return 1
                }
                if (new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime()) {
                    return -1
                }
                return 0
            })[0]
            if (maxCompliance) {
                suretyIds.push(maxCompliance._id)
            }
        }

        const queryObject: any = {
            endAt: { $lt: today },
            _id: suretyIds,
        }

        const foundSuretys = await this.suretyModel.find(queryObject)
            .populate(['business', 'partnership', 'financier'])
            .sort('endAt')
        return plainToInstance(ReadSuretyDto, foundSuretys.map(e => e.toObject()))
    }

    async getSuretiesWithoutDocumentation(
        startDate: string | undefined,
        endDate: string | undefined,
        financierId: string | undefined,
        isEmition: string | undefined,
        commercialId: string | undefined,
    ): Promise<ReadSuretyDto[]> {
        const queryObject: any = {}

        if (startDate && endDate) {
            const sd = new Date(startDate)
            const ed = new Date(endDate)
            sd.setHours(0, 0, 0, 0)
            ed.setHours(0, 0, 0, 0)
            ed.setDate(ed.getDate() + 1)

            queryObject.endAt = { $gte: sd, $lt: ed }
        }

        if (financierId) {
            queryObject.financierId = financierId
        }

        if (isEmition) {
            if (isEmition === 'true') {
                queryObject.isEmition = true
            } else {
                queryObject.isEmition = false
            }
        }

        if (commercialId) {
            const foundTenders = await this.tenderModel.find({ commercialId }, { _id: 1 })
            queryObject.tenderId = { $in: foundTenders.map(e => e._id) }
        }

        const foundSureties = await this.suretyModel.find(queryObject, { policyNumber: 1, isPayed: 1 })
            .populate('nodes')
            .sort('-createdAt')

        const fileTypes = ['INVOICE', 'VOUCHER', 'CHEQUE', 'DEPOSIT', 'SURETY']
        const foundDeposits = await this.depositModel.find()
        const foundCheques = await this.chequeModel.find()

        for (const surety of foundSureties) {
            const filterDeposits = foundDeposits.filter(e => surety._id.equals(e.suretyId))
            const filterCheques = foundCheques.filter(e => surety._id.equals(e.suretyId))
            if (!filterDeposits.length) {
                surety.nodes.push({
                    _id: '',
                    name: '',
                    mimeType: '',
                    fileType: 'DEPOSIT',
                    size: 0,
                    suretyId: '',
                    userId: ''
                } as any)
            }
            if (!filterCheques.length) {
                surety.nodes.push({
                    _id: '',
                    name: '',
                    mimeType: '',
                    fileType: 'CHEQUE',
                    size: 0,
                    suretyId: '',
                    userId: ''
                } as any)
            }
            if (!surety.isPayed) {
                surety.nodes.push({
                    _id: '',
                    name: '',
                    mimeType: '',
                    fileType: 'VOUCHER',
                    size: 0,
                    suretyId: '',
                    userId: ''
                } as any)
            }
        }

        const filterSureties = foundSureties.filter(surety => !fileTypes.every(fileType => surety.nodes.map(node => node.fileType).includes(fileType)))

        return plainToInstance(ReadSuretyDto, filterSureties.map(e => e.toObject()))
    }

    async getSuretiesByTender(tenderId: string): Promise<ReadSuretyDto[]> {
        const foundSuretys = await this.suretyModel.find({ tenderId })
            .populate(['business', 'partnership', 'financier'])
            .sort('-createdAt')
        return plainToInstance(ReadSuretyDto, foundSuretys.map(e => e.toObject()))
    }

    async getSummarySuretyPrimasNotPayedByRangeDateWorker(
        startDate: string,
        endDate: string,
        isEmition: string,
        financierId: string,
        businessId: string,
        commercialId: string,
        officeId: string,
    ): Promise<any> {
        const sd = new Date(startDate)
        const ed = new Date(endDate)
        sd.setHours(0, 0, 0, 0)
        ed.setHours(0, 0, 0, 0)
        ed.setDate(ed.getDate() + 1)

        const $match: any = {
            startDate: { $gte: sd, $lt: ed },
            officeId: new Types.ObjectId(officeId),
            isPaid: false,
        }

        if (commercialId) {
            $match.commercialId = new Types.ObjectId(commercialId)
        }

        if (financierId) {
            $match.financierId = new Types.ObjectId(financierId)
        }

        if (businessId) {
            $match.businessId = new Types.ObjectId(businessId)
        }

        if (isEmition === 'true') {
            $match.isEmition = true
        }

        if (isEmition === 'false') {
            $match.isEmition = false
        }

        const found = await this.suretyModel.aggregate([
            { $match },
            {
                $group: {
                    _id: null,
                    polices: { $push: '$policyNumber' },
                    emitionPrima: {
                        $sum: {
                            $switch: {
                                branches: [
                                    { case: '$isEmition', then: '$prima' },
                                ],
                                default: 0,
                            }
                        }
                    },
                    emitionCount: {
                        $sum: {
                            $switch: {
                                branches: [
                                    { case: '$isEmition', then: 1 },
                                ],
                                default: 0,
                            }
                        }
                    },
                    renovationPrima: {
                        $sum: {
                            $switch: {
                                branches: [
                                    { case: { $eq: ['$isEmition', false] }, then: '$prima' },
                                ],
                                default: 0,
                            }
                        }
                    },
                    renovationCount: {
                        $sum: {
                            $switch: {
                                branches: [
                                    { case: { $eq: ['$isEmition', false] }, then: 1 },
                                ],
                                default: 0,
                            }
                        }
                    },
                }
            }
        ])

        if (found.length) {
            return found[0]
        } else {
            return {
                emitionPrima: 0,
                emitionCount: 0,
                renovationPrima: 0,
                renovationCount: 0,
            }
        }
    }

    async getSuretyPrimasNotPayedByRangeDateWorker(
        startDate: string,
        endDate: string,
        isEmition: string,
        financierId: string,
        businessId: string,
        commercialId: string,
        officeId: string
    ): Promise<any> {
        const sd = new Date(startDate)
        const ed = new Date(endDate)
        sd.setHours(0, 0, 0, 0)
        ed.setHours(0, 0, 0, 0)
        ed.setDate(ed.getDate() + 1)

        const query: any = {
            startDate: { $gte: sd, $lt: ed },
            officeId,
            isPaid: false,
        }

        if (commercialId) {
            query.commercialId = commercialId
        }

        if (financierId) {
            query.financierId = financierId
        }

        if (businessId) {
            query.businessId = businessId
        }

        if (isEmition === 'true') {
            query.isEmition = true
        }

        if (isEmition === 'false') {
            query.isEmition = false
        }

        const foundSuretys = await this.suretyModel.find(query)
            .populate(['business', 'partnership', 'financier', 'construction'])

        return foundSuretys.map(e => plainToInstance(ReadSuretyDto, e.toObject()))

    }

    async delete(suretyId: string): Promise<void> {
        await this.suretyModel.deleteOne({ _id: suretyId })
    }

}
