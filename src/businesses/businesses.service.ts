import { Storage } from '@google-cloud/storage';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import * as path from 'path';
import { Auth } from 'src/auth/auth.interface';
import { Business, BusinessDocument } from 'src/schemas/business.schema';
import { Experience, ExperienceDocument } from 'src/schemas/experience.schema';
import { CreateBusinessDto } from './dto/create-business.dto';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { ReadBusinessDto } from './dto/read-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';

@Injectable()
export class BusinessesService {

    constructor(
        @InjectModel(Business.name)
        private readonly businessModel: Model<BusinessDocument>,
        @InjectModel(Experience.name)
        private readonly experienceModel: Model<ExperienceDocument>,
    ) { }

    private BUCKET_NAME = process.env.BUCKET_NAME || ''
    private KEY_FILE_NAME = path.join(__dirname, '../../' + process.env.KEY_FILE_NAME)

    async uploadFile(file: Buffer, fileName: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const storage = new Storage({
                keyFilename: this.KEY_FILE_NAME
            })

            const bucket = storage.bucket(this.BUCKET_NAME)
            const blob = bucket.file('signatures/' + fileName)
            const blobStream = blob.createWriteStream()
            blobStream.on('finish', async () => {
                resolve(decodeURIComponent(blob.publicUrl()))
            })
            blobStream.on('error', (error) => {
                reject(error)
            })
            blobStream.end(file)
        })
    }

    async getBusinessById(businessId: string): Promise<ReadBusinessDto> {
        const foundBusiness = await this.businessModel.findOne({ _id: businessId }).populate(['shareholders', 'experiences'])
        if (foundBusiness) {
            return plainToInstance(ReadBusinessDto, foundBusiness.toObject())
        } else {
            throw new Error('Sin resultados')
        }
    }

    async getCountBusinesses(
        isDeleted: string | undefined
    ): Promise<number> {
        const queryObject: any = { deletedAt: null }
        if (isDeleted) {
            queryObject.deletedAt = { $ne: null }
        }
        return await this.businessModel.countDocuments(queryObject)
    }

    async getBusinessesByKey(
        key: string,
    ): Promise<ReadBusinessDto[]> {
        const regExp = new RegExp(key, 'i')
        const queryObject: any = {
            deletedAt: null,
            $or: [
                { name: regExp },
                { document: regExp },
            ]
        }
        const foundBusinesses = await this.businessModel.find(queryObject)
            .sort('name')
        return plainToInstance(ReadBusinessDto, foundBusinesses.map(e => e.toObject()))
    }

    async getBusinessByDocument(
        document: string,
    ): Promise<ReadBusinessDto | null> {
        const foundBusiness = await this.businessModel.findOne({ document })
        if (foundBusiness) {
            return plainToInstance(ReadBusinessDto, foundBusiness.toObject())
        } else {
            return null
        }
    }

    async getBusinessesByPage(
        pageIndex: number,
        pageSize: number,
        isDeleted: string | undefined
    ): Promise<ReadBusinessDto[]> {
        const queryObject: any = { deletedAt: null }

        if (isDeleted) {
            queryObject.deletedAt = { $ne: null }
        }

        const foundBusinesses = await this.businessModel.find(queryObject)
            .skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize)
            .sort('-createdAt')
        return plainToInstance(ReadBusinessDto, foundBusinesses.map(e => e.toObject()))
    }

    async create(
        business: CreateBusinessDto,
        experiences: CreateExperienceDto[],
        auth: Auth
    ): Promise<ReadBusinessDto> {
        const session = await this.businessModel.db.startSession()
        session.startTransaction()
        console.log('empesando')

        try {
            const createdBusiness = new this.businessModel({
                ...business,
                userId: auth.userId,
            })
            const savedBusiness = await createdBusiness.save({ session })

            const createdExperiences: ExperienceDocument[] = []

            for (const experience of experiences) {
                const createdExperience = new this.experienceModel({
                    ...experience,
                    userId: auth.userId,
                    businessId: savedBusiness._id
                })
                createdExperiences.push(createdExperience)
            }

            await this.experienceModel.insertMany(createdExperiences, { session })

            await session.commitTransaction()
            session.endSession()

            return plainToInstance(ReadBusinessDto, savedBusiness.toObject())

        } catch (error) {
            console.log('Abortando registro')
            await session.abortTransaction()
            session.endSession()
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error('Error desconocido')
            }
        }
    }

    async updateSignature(urlSignature: string, businessId: string) {
        await this.businessModel.updateOne({ _id: businessId }, { urlSignature })
    }

    async update(
        business: UpdateBusinessDto,
        businessId: string
    ): Promise<void> {
        const session = await this.businessModel.db.startSession()
        session.startTransaction()
        console.log('Empesando transaccion')

        try {
            await this.businessModel.updateOne({ _id: businessId }, business)
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

    async updateWithExperiences(
        business: UpdateBusinessDto,
        experiences: CreateExperienceDto[],
        auth: Auth,
        businessId: string
    ): Promise<void> {
        const session = await this.businessModel.db.startSession()
        session.startTransaction()
        console.log('Empesando transaccion')

        try {
            const createdExperiences: ExperienceDocument[] = []

            for (const experience of experiences) {
                const createdExperience = new this.experienceModel({
                    ...experience,
                    userId: auth.userId,
                    businessId
                })
                createdExperiences.push(createdExperience)
            }

            await this.experienceModel.deleteMany({ businessId }, { session })
            await this.experienceModel.insertMany(createdExperiences, { session })
            await this.businessModel.updateOne({ _id: businessId }, business)

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
