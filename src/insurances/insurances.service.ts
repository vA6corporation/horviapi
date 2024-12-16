import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import { Auth } from 'src/auth/auth.interface';
import { InsuranceGroup, InsuranceGroupDocument } from 'src/schemas/insurance-group.schema';
import { Insurance, InsuranceDocument } from 'src/schemas/insurance.schema';
import { CreateInsuranceDto } from './dto/create-insurance.dto';
import { ReadInsuranceDto } from './dto/read-insurance.dto';
import { UpdateInsuranceDto } from './dto/update-insurance.dto';

@Injectable()
export class InsurancesService {

    constructor(
        @InjectModel(Insurance.name)
        private readonly insuranceModel: Model<InsuranceDocument>,
        @InjectModel(InsuranceGroup.name)
        private readonly insuranceGroupModel: Model<InsuranceGroupDocument>,
    ) { }

    async getInsurancesByRangeDateTypeWorker(
        startDate: string,
        endDate: string,
        type: string | undefined,
        commercialId: string | undefined,
        officeId: string
    ): Promise<ReadInsuranceDto[]> {
        const sd = new Date(startDate)
        const ed = new Date(endDate)
        sd.setHours(0, 0, 0, 0)
        ed.setHours(0, 0, 0, 0)
        ed.setDate(ed.getDate() + 1)

        const query: any = {
            officeId,
            createdAt: { $gte: sd, $lt: ed },
        }

        if (type) {
            query.type = type
        }

        if (commercialId) {
            query.commercialId = commercialId
        }

        const foundInsurances = await this.insuranceModel.find(query)
            .populate(['commercial', 'business', 'partnership', 'construction', 'financier'])

        if (!foundInsurances.length) {
            throw new Error("Sin resultados")
        }

        return foundInsurances.map(e => plainToInstance(ReadInsuranceDto, e.toObject()))
    }

    async getInsuranceById(insuranceId: string): Promise<ReadInsuranceDto> {
        const foundInsurance = await this.insuranceModel.findOne({ _id: insuranceId })
            .populate([
                'customer',
                'financier',
                'tender',
            ])
        return plainToInstance(ReadInsuranceDto, foundInsurance?.toObject())
    }

    async getInsurancesByInsuranceGroup(insuranceGroupId: string): Promise<ReadInsuranceDto[]> {
        const foundInsurances = await this.insuranceModel.find({ insuranceGroupId })
            .populate(['customer', 'financier', 'tender', 'commercial'])
            .sort('expirationAt')
        return plainToInstance(ReadInsuranceDto, foundInsurances.map(e => e.toObject()))
    }

    async getInsurancesByPage(
        pageIndex: number,
        pageSize: number,
        insuranceType?: string,
        commercialId?: string,
        startDate?: string,
        endDate?: string,
    ): Promise<ReadInsuranceDto[]> {
        const query: any = { insuranceType }

        if (commercialId) {
            query.commercialId = commercialId
        }

        if (startDate && endDate) {
            const sd = new Date(startDate)
            const ed = new Date(endDate)
            sd.setHours(0, 0, 0, 0)
            ed.setHours(0, 0, 0, 0)
            ed.setDate(ed.getDate() + 1)
            query.emitionAt = { $gte: sd, $lt: ed }
        }

        const foundInsurances = await this.insuranceModel.find(query)
            .populate(['customer', 'financier', 'commercial'])
            .skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize)
            .sort('-createdAt')

        return foundInsurances.map(e => plainToInstance(ReadInsuranceDto, e.toObject()))
    }

    async getCountInsurances(
        insuranceType?: string,
        commercialId?: string,
        startDate?: string,
        endDate?: string
    ): Promise<number> {
        const query: any = { insuranceType }

        if (commercialId) {
            query.commercialId = commercialId
        }

        if (startDate && endDate) {
            const sd = new Date(startDate)
            const ed = new Date(endDate)
            sd.setHours(0, 0, 0, 0)
            ed.setHours(0, 0, 0, 0)
            ed.setDate(ed.getDate() + 1)
            query.emitionAt = { $gte: sd, $lt: ed }
        }

        return await this.insuranceModel.countDocuments(query)
    }

    async create(
        insurance: CreateInsuranceDto,
        insuranceGroupId: string | null,
        auth: Auth
    ): Promise<ReadInsuranceDto> {
        let isEmition = false
        if (insuranceGroupId === null) {
            const createdInsuranceGroup = new this.insuranceGroupModel()
            const savedInsuranceGroup = await createdInsuranceGroup.save()
            insuranceGroupId = savedInsuranceGroup._id.toString()
            isEmition = true
        }

        const createdInsurance = new this.insuranceModel({
            ...insurance,
            isEmition,
            insuranceGroupId,
            userId: auth.userId,
        })
        const savedInsurance = await createdInsurance.save()
        return plainToInstance(ReadInsuranceDto, savedInsurance.toObject())
    }

    // async createWithInsuranceGroup(insurance: CreateInsuranceDto, auth: Auth): Promise<ReadInsuranceDto> {
    //     const createdInsuranceGroup = new this.insuranceGroupModel()
    //     const savedInsuranceGroup = await createdInsuranceGroup.save()

    //     const createdInsurance = new this.insuranceModel({
    //         ...insurance,
    //         insuranceGroupId: savedInsuranceGroup._id,
    //         userId: auth.userId,
    //     })
    //     const savedInsurance = await createdInsurance.save()
    //     return plainToInstance(ReadInsuranceDto, savedInsurance.toObject())
    // }

    async update(
        insurance: UpdateInsuranceDto,
        insuranceId: string,
    ): Promise<void> {
        await this.insuranceModel.updateOne({ _id: insuranceId }, insurance)
    }

    async updateOffice(insuranceId: string, officeId: string): Promise<void> {
        await this.insuranceModel.updateOne({ _id: insuranceId }, { officeId })
    }

    async delete(insuranceId: string) {
        await this.insuranceModel.deleteOne({ _id: insuranceId })
    }


    // async deletePdf(insurancePdfId: string, pdfId: string) {
    //     await this.insurancePdfModel.deleteOne({ _id: insurancePdfId })
    //     const gridFS = new MongoGridFS(this.connection.db, 'insurancePdfs')
    //     await gridFS.delete(pdfId).catch(() => console.log('pdf no encontrada'))
    // }

}
