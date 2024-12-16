import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Template, TemplateDocument } from 'src/schemas/template.schema';
import { Model } from 'mongoose';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { ReadPartnershipDto } from 'src/partnerships/dto/read-partnership.dto';
import { ReadTemplateDto } from './dto/read-template.dto';
import { plainToInstance } from 'class-transformer';
import { CreateTemplateDto } from './dto/create-template.dto';
import { Auth } from 'src/auth/auth.interface';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { Guarantee, GuaranteeDocument } from 'src/schemas/guarantee.schema';
import { UpdateGuaranteeDto } from './dto/update-guarantee.dto';
import { CreateGuaranteeDto } from './dto/create-guarantee.dto';

@Injectable()
export class TemplatesService {

    constructor(
        @InjectModel(Template.name)
        private readonly templateModel: Model<TemplateDocument>,
        @InjectModel(Guarantee.name)
        private readonly guaranteeModel: Model<GuaranteeDocument>,
    ) { }

    getCountTemplates() {
        return this.templateModel.countDocuments()
    }

    async getTemplatesByKey(
        businesses: ReadBusinessDto[],
        partnerships: ReadPartnershipDto[]
    ): Promise<ReadTemplateDto[]> {
        const foundTemplates = await this.templateModel.find({
            $or: [
                { partnershipId: partnerships.map(e => e._id) },
                { businessId: businesses.map(e => e._id) }
            ]
        }).populate(['business', 'partnership', 'beneficiary'])
            .sort('-createdAt')

        return plainToInstance(ReadTemplateDto, foundTemplates.map(e => e.toObject()))
    }

    async getTemplateById(templateId: string): Promise<ReadTemplateDto> {
        const foundTemplate = await this.templateModel.findOne({ _id: templateId }).populate([
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
            {
                path: 'partnership',
                populate: {
                    path: 'partnershipItems',
                    populate: {
                        path: 'business',
                        populate: [
                            'shareholders',
                            'properties',
                            'movableProperties',
                            'investments',
                            'experiences',
                            'facilityCredits',
                        ]
                    }
                }
            },
            'beneficiary',
            'guaranties'
        ])
        if (foundTemplate) {
            return plainToInstance(ReadTemplateDto, foundTemplate.toObject())
        } else {
            throw new Error("Sin resultados")
        }
    }

    async getTemplatesByPage(pageIndex: number, pageSize: number): Promise<ReadTemplateDto[]> {
        const foundTemplates = await this.templateModel.find()
            .skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize)
            .populate(['business', 'partnership', 'beneficiary'])
            .sort('-createdAt')

        return plainToInstance(ReadTemplateDto, foundTemplates.map(e => e.toObject()))
    }

    async create(
        template: CreateTemplateDto,
        guaranties: CreateGuaranteeDto[], 
        auth: Auth
    ): Promise<ReadTemplateDto> {

        const session = await this.templateModel.db.startSession()
        session.startTransaction()
        console.log('Empesando transaccion')

        try {
            
            const createdTemplate = new this.templateModel({
                ...template,
                userId: auth.userId
            })
            const savedTemplate = await createdTemplate.save({ session })
            const createdGuaranties: GuaranteeDocument[] = []
            
            for (const guarantee of guaranties) {
                const createdGuarantee = new this.guaranteeModel({
                    ...guarantee,
                    templateId: savedTemplate._id,
                    userId: auth.userId,
                })
                createdGuaranties.push(createdGuarantee)
            }

            await this.guaranteeModel.insertMany(createdGuaranties, { session })
            await session.commitTransaction()
            session.endSession()

            return plainToInstance(ReadTemplateDto, savedTemplate.toObject())

        } catch (error) {
            console.log('Abortando transaccion')
            await session.abortTransaction()
            session.endSession()
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error('Error desconocido')
            }
        }
    }

    async update(
        template: UpdateTemplateDto, 
        guaranties: UpdateGuaranteeDto[],
        auth: Auth,
        templateId: string
    ): Promise<void> {
        const session = await this.templateModel.db.startSession()
        session.startTransaction()
        console.log('Empesando transaccion')

        try {
            await this.guaranteeModel.deleteMany({ templateId }, { session })
            await this.templateModel.updateOne({ _id: templateId }, template, { session })
            const createdGuaranties: GuaranteeDocument[] = []
            
            for (const guarantee of guaranties) {
                const createdGuarantee = new this.guaranteeModel({
                    ...guarantee,
                    templateId,
                    userId: auth.userId,
                })
                createdGuaranties.push(createdGuarantee)
            }

            await this.guaranteeModel.insertMany(createdGuaranties, { session })
            await session.commitTransaction()
            session.endSession()
        } catch (error) {
            console.log('Abortando transaccion')
            await session.abortTransaction()
            session.endSession()
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error('Error desconocido')
            }
        }
    }

}
