import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import { Auth } from 'src/auth/auth.interface';
import { MovableProperty, MovablePropertyDocument } from 'src/schemas/movable-property.schema';
import { CreateMovablePropertyDto } from './dto/create-movable-property.dto';
import { ReadMovablePropertyDto } from './dto/read-movable-property.dto';
import { UpdateMovablePropertyDto } from './dto/update-movable-property.dto';

@Injectable()
export class MovablePropertiesService {

    constructor(
        @InjectModel(MovableProperty.name)
        private readonly movablePropertyModel: Model<MovablePropertyDocument>
    ) { }

    async getMovablePropertyById(
        propertyId: string
    ): Promise<ReadMovablePropertyDto> {
        const foundMovableProperty = await this.movablePropertyModel.findOne({ _id: propertyId })
        if (foundMovableProperty) {
            return plainToInstance(ReadMovablePropertyDto, foundMovableProperty.toObject())
        } else {
            throw new Error("Sin resultados")
        }
    }

    async getMovablePropertiesByPage(
        pageIndex: number,
        pageSize: number
    ): Promise<ReadMovablePropertyDto[]> {
        const foundMovableProperties = await this.movablePropertyModel.find()
            .skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize)
            .sort('-createdAt')
        return plainToInstance(ReadMovablePropertyDto, foundMovableProperties.map(e => e.toObject()))
    }

    async getMovablePropertiesByKey(key: string): Promise<ReadMovablePropertyDto[]> {
        const regExp = new RegExp(key, 'i')

        const foundMovableProperties = await this.movablePropertyModel.find({
            $or: [
                { description: regExp },
                { placa: regExp }
            ]
        })
        return plainToInstance(ReadMovablePropertyDto, foundMovableProperties.map(e => e.toObject()))
    }

    async getMovablePropertiesCount() {
        return this.movablePropertyModel.countDocuments()
    }

    async create(
        movableProperty: CreateMovablePropertyDto,
        auth: Auth
    ): Promise<ReadMovablePropertyDto> {
        const createdMovableProperty = new this.movablePropertyModel({
            ...movableProperty,
            userId: auth.userId,
        })
        const savedMovableProperty = await createdMovableProperty.save()
        return plainToInstance(ReadMovablePropertyDto, savedMovableProperty.toObject())
    }

    async update(
        movableProperty: UpdateMovablePropertyDto,
        movablePropertyId: string
    ): Promise<void> {
        await this.movablePropertyModel.updateOne({ _id: movablePropertyId }, movableProperty)
    }

}
