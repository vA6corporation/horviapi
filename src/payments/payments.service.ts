import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import { Payment, PaymentDocument } from 'src/schemas/payment.schema';
import { ReadPaymentDto } from './dto/read-payment.dto';
import { CreatePaymentDto } from './dto/create-payment.dt';
import { UpdatePaymentDto } from './dto/update-payment.dt';
import { Auth } from 'src/auth/auth.interface';

@Injectable()
export class PaymentsService {

    constructor(
        @InjectModel(Payment.name)
        private readonly paymentModel: Model<PaymentDocument>,
    ) { }

    async getCountPayments(): Promise<number> {
        return await this.paymentModel.countDocuments()
    }

    async getPaymentsByPage(
        pageIndex: number,
        pageSize: number,
    ): Promise<ReadPaymentDto[]> {
        const foundPayments = await this.paymentModel.find()
            .populate('bank')
            .skip((pageSize * pageIndex) - pageSize)
            .limit(pageSize)
            .sort('-paymentAt')
        return plainToInstance(ReadPaymentDto, foundPayments.map(e => e.toObject()))
    }

    async create(
        payment: CreatePaymentDto,
        auth: Auth
    ): Promise<ReadPaymentDto> {
        const createdPayment = new this.paymentModel({ 
            ...payment,
            userId: auth.userId 
        })
        const savedPayment = await createdPayment.save()
        return plainToInstance(ReadPaymentDto, savedPayment.toObject())
    }

    async update(
        payment: UpdatePaymentDto,
        paymentId: string
    ): Promise<void> {
        await this.paymentModel.updateOne({ _id: paymentId }, payment)
    }

    async deletePaymentsByParentId(parentId: string): Promise<void> {
        await this.paymentModel.deleteMany({ parentId })
    }

}
