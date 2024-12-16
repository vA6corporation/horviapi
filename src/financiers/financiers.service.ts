import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import { Auth } from 'src/auth/auth.interface';
import { Financier, FinancierDocument } from 'src/schemas/financier.schema';
import { CreateFinancierDto } from './dto/create-financier.dto';
import { ReadFinancierDto } from './dto/read-financier.dto';
import { UpdateFinancierDto } from './dto/update-financier.dto';

@Injectable()
export class FinanciersService {

    constructor(
        @InjectModel(Financier.name)
        private readonly financierModel: Model<FinancierDocument>,
    ) { }

    async countFinanciers(): Promise<number> {
        return this.financierModel.countDocuments()
    }

    async getFinancierById(financierId: string): Promise<ReadFinancierDto> {
        const foundFinancier = await this.financierModel.findOne({ _id: financierId })
        if (foundFinancier) {
            return plainToInstance(ReadFinancierDto, foundFinancier)
        } else {
            throw new HttpException('Sin resultados', HttpStatus.BAD_REQUEST)
        }
    }

    async getFinancierByDocument(document: string): Promise<ReadFinancierDto | null> {
        const foundFinancier = await this.financierModel.findOne({ document })
        if (foundFinancier) {
            return plainToInstance(ReadFinancierDto, foundFinancier)
        } else {
            return null
        }
    }

    async getFinanciersByPage(pageIndex: number, pageSize: number): Promise<ReadFinancierDto[]> {
        const foundFinanciers = await this.financierModel.find()
            .skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize)
        return foundFinanciers.map(financier => plainToInstance(ReadFinancierDto, financier))
    }

    async getFinanciers(): Promise<ReadFinancierDto[]> {
        const foundFinanciers = await this.financierModel.find()
        return foundFinanciers.map(financier => plainToInstance(ReadFinancierDto, financier))
    }

    async getFinanciersByKey(key: string): Promise<ReadFinancierDto[]> {
        const regExp = new RegExp(key, 'i')
        const foundFinanciers = await this.financierModel.find({
            deletedAt: null,
            $or: [
                { name: regExp },
                { document: regExp },
            ]
        }).limit(20)
        return foundFinanciers.map(financier => plainToInstance(ReadFinancierDto, financier))
    }

    async create(
        financier: CreateFinancierDto, 
        auth: Auth
    ): Promise<ReadFinancierDto> {
        const foundFinancier = await this.getFinancierByDocument(financier.document)
        if (foundFinancier) {
            throw new Error("Existe una financiera con el mismo N° de documento")
        } else {
            const createdFinancier = new this.financierModel({
                ...financier,
                userId: auth.userId,
            })
            const savedFinancier = await createdFinancier.save()
            return plainToInstance(ReadFinancierDto, savedFinancier.toObject())
        }
    }

    async update(financier: UpdateFinancierDto, financierId: string): Promise<void> {
        const foundFinancier = await this.getFinancierByDocument(financier.document)
        if (foundFinancier && !foundFinancier._id.equals(financierId)) {
            throw new Error("Existe una financiera con el mismo N° de RUC")
        }
        await this.financierModel.updateOne({ _id: financierId }, financier)
    }

}
