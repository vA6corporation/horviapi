import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import { Auth } from 'src/auth/auth.interface';
import { Property, PropertyDocument } from 'src/schemas/property.schema';
import { CreatePropertyDto } from './dto/create-property.dto';
import { ReadPropertyDto } from './dto/read-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';

@Injectable()
export class PropertiesService {

    constructor(
        @InjectModel(Property.name)
        private readonly propertyModel: Model<PropertyDocument>
    ) { }

    async getPropertyById(
        propertyId: string
    ): Promise<ReadPropertyDto> {
        const foundProperty = await this.propertyModel.findOne({ _id: propertyId })
        if (foundProperty) {
            return plainToInstance(ReadPropertyDto, foundProperty.toObject())
        } else {
            throw new Error("Sin resultados")
        }
    }

    async getPropertiesByPage(
        pageIndex: number,
        pageSize: number
    ): Promise<ReadPropertyDto[]> {
        const foundProperties = await this.propertyModel.find()
            .skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize)
            .sort('-createdAt')
        return plainToInstance(ReadPropertyDto, foundProperties.map(e => e.toObject()))
    }

    async getPropertiesByKey(key: string): Promise<ReadPropertyDto[]> {
        const regExp = new RegExp(key, 'i')

        const foundProperties = await this.propertyModel.find({
            $or: [
                { location: regExp },
                { inscription: regExp }
            ]
        })
        return plainToInstance(ReadPropertyDto, foundProperties.map(e => e.toObject()))
    }

    async getPropertiesCount() {
        return this.propertyModel.countDocuments()
    }

    async create(
        property: CreatePropertyDto,
        auth: Auth
    ): Promise<ReadPropertyDto> {
        const createdProperty = new this.propertyModel({
            ...property,
            userId: auth.userId,
        })
        const savedProperty = await createdProperty.save()
        return plainToInstance(ReadPropertyDto, savedProperty.toObject())
    }

    async update(
        property: UpdatePropertyDto,
        propertyId: string
    ): Promise<void> {
        await this.propertyModel.updateOne({ _id: propertyId }, property)
    }

}
