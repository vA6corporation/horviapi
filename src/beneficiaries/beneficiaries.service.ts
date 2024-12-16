import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import { Auth } from 'src/auth/auth.interface';
import { Beneficiary, BeneficiaryDocument } from 'src/schemas/beneficiary.schema';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
import { ReadBeneficiaryDto } from './dto/read-beneficiary.dto';
import { UpdateBeneficiaryDto } from './dto/update-beneficiary.dto';

@Injectable()
export class BeneficiariesService {

    constructor(
        @InjectModel(Beneficiary.name)
        private readonly beneficiaryModel: Model<BeneficiaryDocument>
    ) { }

    async count(): Promise<number> {
        return await this.beneficiaryModel.countDocuments()
    }

    async getBeneficiariesByKey(key: string): Promise<ReadBeneficiaryDto[]> {
        const regExp = new RegExp(key, 'i')

        const query: any = {
            $or: [
                { name: regExp },
                { document: regExp },
            ]
        }

        const foundBeneficiaries = await this.beneficiaryModel.find(query).limit(20)
        return foundBeneficiaries.map(beneficiary => plainToInstance(ReadBeneficiaryDto, beneficiary))
    }

    async getBeneficiariesByPage(
        pageIndex: number,
        pageSize: number,
    ): Promise<ReadBeneficiaryDto[]> {
        const foundBeneficiaries = await this.beneficiaryModel.find()
            .sort('-createdAt')
            .skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize)
        return foundBeneficiaries.map(beneficiary => plainToInstance(ReadBeneficiaryDto, beneficiary))
    }

    async getBeneficiaryByDocument(document: string): Promise<ReadBeneficiaryDto | null> {
        const foundBeneficiary = await this.beneficiaryModel.findOne({ document })
        if (foundBeneficiary) {
            return plainToInstance(ReadBeneficiaryDto, foundBeneficiary.toObject())
        } else {
            return null
        }
    }

    async getBeneficiaryById(beneficiaryId: string): Promise<ReadBeneficiaryDto> {
        const foundBeneficiary = await this.beneficiaryModel.findOne({ _id: beneficiaryId })
        if (foundBeneficiary) {
            return plainToInstance(ReadBeneficiaryDto, foundBeneficiary)
        } else {
            throw new Error("Sin resultados")
        }
    }

    async create(
        createBeneficiaryDto: CreateBeneficiaryDto,
        auth: Auth
    ): Promise<ReadBeneficiaryDto> {
        const foundBeneficiary = await this.beneficiaryModel.findOne({ document: createBeneficiaryDto.document })
        if (foundBeneficiary) {
            throw new Error("Existe un beneficiario con este mismo N° de documento")
        }
        const createdBeneficiary = new this.beneficiaryModel({
            ...createBeneficiaryDto,
            userId: auth.userId,
        })
        const savedBeneficiary = await createdBeneficiary.save()
        return plainToInstance(ReadBeneficiaryDto, savedBeneficiary)
    }

    async update(
        updateBeneficiaryDto: UpdateBeneficiaryDto,
        beneficiaryId: string,
    ): Promise<ReadBeneficiaryDto> {
        await this.beneficiaryModel.updateOne({ _id: beneficiaryId }, updateBeneficiaryDto)
        return plainToInstance(ReadBeneficiaryDto, updateBeneficiaryDto)
    }

}
