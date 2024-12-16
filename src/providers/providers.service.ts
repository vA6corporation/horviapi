import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { ReadProviderDto } from './dto/read-provider.dto';
import { Provider, ProviderDocument } from '../schemas/provider.schema';
import { Auth } from '../auth/auth.interface';

@Injectable()
export class ProvidersService {

    constructor(
        @InjectModel(Provider.name)
        private readonly providerModel: Model<ProviderDocument>,
    ) { }

    async create(
        provider: CreateProviderDto,
        auth: Auth
    ): Promise<ReadProviderDto> {
        const createdProvider = new this.providerModel({
            ...provider,
            userId: auth.userId,
        })
        const savedProvider = await createdProvider.save()
        return plainToInstance(ReadProviderDto, savedProvider.toObject())
    }

    async update(
        provider: UpdateProviderDto,
        providerId: string
    ): Promise<void> {
        await this.providerModel.updateOne({ _id: providerId }, provider)
    }

    async getProviderById(providerId: string): Promise<ReadProviderDto> {
        const foundProvider = await this.providerModel.findOne({ _id: providerId })
        return plainToInstance(ReadProviderDto, foundProvider?.toObject())
    }

    countProviders() {
        return this.providerModel.countDocuments({ deletedAt: null })
    }

    async getProvidersByKey(key: string): Promise<ReadProviderDto[]> {
        const regExp = new RegExp(key, 'i')
        const foundProviders = await this.providerModel.find({
            $or: [
                { name: regExp },
                { document: regExp },
            ]
        }).sort('name')
            .limit(20)
        return foundProviders.map(e => plainToInstance(ReadProviderDto, e.toObject()))
    }

    async getProvidersByMobile(mobileNumber: string): Promise<ReadProviderDto[]> {
        const foundProviders = await this.providerModel.find({
            mobileNumber,
        })
            .sort('name')
            .limit(20)
        return foundProviders.map(e => plainToInstance(ReadProviderDto, e.toObject()))
    }

    async getProvidersByPage(pageIndex: number, pageSize: number): Promise<ReadProviderDto[]> {
        const foundProviders = await this.providerModel.find({
            deletedAt: null,
        }).skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize)
        return foundProviders.map(e => plainToInstance(ReadProviderDto, e.toObject()))
    }

    async getByRuc(
        ruc: string, 
    ): Promise<ReadProviderDto[]> {
        const foundProviders = await this.providerModel.find({
            document: ruc,
            documentType: 'RUC',
        })
        if (!foundProviders.length) {
            throw new Error('Sin resultados')
        }
        return foundProviders.map(e => plainToInstance(ReadProviderDto, e.toObject()))
    }

    async getByDni(
        dni: string, 
    ): Promise<ReadProviderDto[]> {
        const foundProviders = await this.providerModel.find({
            document: dni,
            documentType: 'DNI',
        })
        if (!foundProviders.length) {
            throw new Error('Sin resultados')
        }
        return foundProviders.map(e => plainToInstance(ReadProviderDto, e.toObject()))
    }

    async softDelete(providerId: string): Promise<void> {
        await this.providerModel.updateOne({ _id: providerId }, { deletedAt: new Date() })
    }

    async restore(providerId: string): Promise<void> {
        await this.providerModel.updateOne({ _id: providerId }, { deletedAt: null })
    }
}
