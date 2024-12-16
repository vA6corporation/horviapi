import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import { Auth } from '../auth/auth.interface';
import { ReadProviderDto } from '../providers/dto/read-provider.dto';
import { PaymentOrder, PaymentOrderDocument } from '../schemas/payment-order.schema';
import { CreatePaymentOrderDto } from './dto/create-payment-order.dto';
import { ReadPaymentOrderDto } from './dto/read-payment-order.dto';
import { UpdatePaymentOrderDto } from './dto/update-payment-order.dto';

@Injectable()
export class PaymentOrdersService {

    constructor(
        @InjectModel(PaymentOrder.name)
        private readonly paymentOrderModel: Model<PaymentOrderDocument>,
    ) { }

    async getPaymentOrderById(
        paymentOrderId: string,
    ): Promise<ReadPaymentOrderDto> {
        const foundPaymentOrder = await this.paymentOrderModel.findOne({ _id: paymentOrderId })
            .populate('provider')
        return plainToInstance(ReadPaymentOrderDto, foundPaymentOrder?.toObject())
    }

    async getCountPaymentOrders(
        startDate: string | undefined,
        endDate: string | undefined,
    ): Promise<number> {
        const queryObject: any = {}

        if (startDate && endDate) {
            const sd = new Date(startDate)
            const ed = new Date(endDate)
            sd.setHours(0, 0, 0, 0)
            ed.setHours(0, 0, 0, 0)
            ed.setDate(ed.getDate() + 1)
            queryObject.paymentAt = { $gte: sd, $lt: ed }
        }

        return await this.paymentOrderModel.countDocuments(queryObject)
    }

    async getPaymentOrdersByRangeDate(
        startDate: string,
        endDate: string,
    ): Promise<ReadPaymentOrderDto[]> {
        const sd = new Date(startDate)
        const ed = new Date(endDate)
        sd.setHours(0, 0, 0, 0)
        ed.setHours(0, 0, 0, 0)
        ed.setDate(ed.getDate() + 1)

        const queryObject: any = {
            paymentAt: { $gte: sd, $lt: ed }
        }

        const foundPaymentOrders = await this.paymentOrderModel.find(queryObject)
        return foundPaymentOrders.map(e => plainToInstance(ReadPaymentOrderDto, e.toObject()))
    }

    async getPaymentOrdersByPage(
        pageIndex: number,
        pageSize: number,
        startDate: string | undefined,
        endDate: string | undefined,
    ): Promise<ReadPaymentOrderDto[]> {
        const queryObject: any = {}
        
        if (startDate && endDate) {
            const sd = new Date(startDate)
            const ed = new Date(endDate)
            sd.setHours(0, 0, 0, 0)
            ed.setHours(0, 0, 0, 0)
            ed.setDate(ed.getDate() + 1)
            queryObject.paymentAt = { $gte: sd, $lt: ed }
        }

        const foundPaymentOrders = await this.paymentOrderModel.find(queryObject)
            .populate(['provider'])
            .skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize)
            .sort('-createdAt')

        return foundPaymentOrders.map(e => plainToInstance(ReadPaymentOrderDto, e.toObject()))
    }

    async getPaymentOrdersByKey(
        key: string,
        providers: ReadProviderDto[],
    ): Promise<ReadPaymentOrderDto[]> {
        const regExp = new RegExp(key, 'i')
        const foundPaymentOrders = await this.paymentOrderModel.find({
            $or: [
                { providerId: { $in: providers.map(e => e._id) } },
                { concept: regExp },
                { serie: regExp },
            ],
        }).populate(['provider'])
            .limit(40)

        return plainToInstance(ReadPaymentOrderDto, foundPaymentOrders.map(e => e.toObject()))
    }

    async create(
        paymentOrder: CreatePaymentOrderDto,
        auth: Auth
    ): Promise<ReadPaymentOrderDto> {
        const createdPaymentOrder = new this.paymentOrderModel({
            ...paymentOrder,
            providerId: paymentOrder.providerId,
            userId: auth.userId,
        })

        const savedPaymentOrder = await createdPaymentOrder.save()
        return plainToInstance(ReadPaymentOrderDto, savedPaymentOrder.toObject())
    }

    async update(
        paymentOrder: UpdatePaymentOrderDto,
        paymentOrderId: string,
    ): Promise<void> {
        await this.paymentOrderModel.updateOne({ _id: paymentOrderId }, paymentOrder)
    }

    async delete(paymentOrderId: string) {
        await this.paymentOrderModel.deleteOne({ _id: paymentOrderId })
    }

}
