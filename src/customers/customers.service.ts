import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToClass, plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import { Auth } from 'src/auth/auth.interface';
import { Customer, CustomerDocument } from 'src/schemas/customer.schema';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { ReadCustomerDto } from './dto/read-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomersService {

    constructor(
        @InjectModel(Customer.name)
        private readonly customerModel: Model<CustomerDocument>,
    ) { }

    async getCountCustomers(): Promise<number> {
        return await this.customerModel.countDocuments()
    }

    async getCustomerByDocument(
        document: string,
    ): Promise<ReadCustomerDto | null> {
        const foundCustomer = await this.customerModel.findOne({ document })
        if (foundCustomer) {
            return plainToInstance(ReadCustomerDto, foundCustomer.toObject())
        } else {
            return null
        }
    }

    async getCustomerById(
        customerId: string,
    ): Promise<ReadCustomerDto> {
        const foundCustomer = await this.customerModel.findOne({ _id: customerId })

        return plainToInstance(ReadCustomerDto, foundCustomer?.toObject())
    }

    async getCustomersByPage(
        pageIndex: number,
        pageSize: number,
    ): Promise<ReadCustomerDto[]> {
        const foundCustomers = await this.customerModel.find()
            .skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize)
            .sort('-createdAt')

        return plainToInstance(ReadCustomerDto, foundCustomers.map(e => e.toObject()))
    }

    async getCustomersByKey(
        key: string,
    ): Promise<ReadCustomerDto[]> {
        const regExp = new RegExp(key, 'i')
        const query: any = {
            deletedAt: null,
            $or: [
                { name: regExp },
                { document: regExp },
            ]
        }
        const foundCustomers = await this.customerModel.find(query)
        return plainToInstance(ReadCustomerDto, foundCustomers.map(e => e.toObject()))
    }

    async create(
        customer: CreateCustomerDto,
        auth: Auth
    ): Promise<ReadCustomerDto> {
        const createdCustomer = new this.customerModel({
            ...customer,
            userId: auth.userId,
        })
        const savedCustomer = await createdCustomer.save()
        return plainToClass(ReadCustomerDto, savedCustomer.toObject())
    }

    async update(
        customer: UpdateCustomerDto,
        customerId: string
    ): Promise<void> {
        await this.customerModel.updateOne({ _id: customerId }, customer)
    }

}
