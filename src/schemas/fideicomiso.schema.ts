import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document, Types } from 'mongoose';
import { Customer } from './customer.schema';
import { Financier } from './financier.schema';
import { Payment, PaymentDocument } from './payment.schema';
import { User } from './user.schema';
import { Commercial } from './commercial.schema';

export type FideicomisoDocument = Fideicomiso & Document;

@Schema({ timestamps: true })
export class Fideicomiso {

    _id!: string

    @Prop({ type: Number, required: true })
    days!: number

    @Prop({ type: Date, required: true })
    emitionAt!: string

    @Prop({ type: Number, required: true })
    charge!: number

    @Prop({ type: Number, default: null })
    commission!: number

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Customer.name, required: true })
    customerId!: any

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Financier.name, required: true })
    financierId!: any

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Commercial.name, required: true })
    commercialId!: Types.ObjectId

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    userId!: string

    payments!: PaymentDocument[] | undefined

}

export const FideicomisoSchema = SchemaFactory.createForClass(Fideicomiso)

FideicomisoSchema.set('toObject', { virtuals: true })

FideicomisoSchema.virtual('customer', {
    ref: Customer.name,
    localField: 'customerId',
    foreignField: '_id',
    justOne: true,
})

FideicomisoSchema.virtual('financier', {
    ref: Financier.name,
    localField: 'financierId',
    foreignField: '_id',
    justOne: true,
})

FideicomisoSchema.virtual('commercial', {
    ref: Commercial.name,
    localField: 'commercialId',
    foreignField: '_id',
    justOne: true,
})

FideicomisoSchema.virtual('payments', {
    ref: Payment.name,
    localField: '_id',
    foreignField: 'parentId',
    justOne: false,
})