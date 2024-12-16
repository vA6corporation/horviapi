import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Customer } from './customer.schema';
import { Payment } from './payment.schema';
import { User } from './user.schema';
import { Types } from 'mongoose';
import { Commercial } from './commercial.schema';

export type CapitalIncreaseDocument = CapitalIncrease & Document;

@Schema({ timestamps: true })
export class CapitalIncrease {

    _id!: Types.ObjectId

    @Prop({ type: Date, required: true })
    emitionAt!: string

    @Prop({ type: Number, required: true })
    capital!: number

    @Prop({ type: Number, required: true })
    charge!: number

    @Prop({ type: Number, default: null })
    commission!: number

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Customer.name, required: true })
    customerId!: any

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Worker.name, required: true })
    commercialId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    userId!: string

}

export const CapitalIncreaseSchema = SchemaFactory.createForClass(CapitalIncrease)

CapitalIncreaseSchema.set('toObject', { virtuals: true })

CapitalIncreaseSchema.virtual('customer', {
    ref: Customer.name,
    localField: 'customerId',
    foreignField: '_id',
    justOne: true,
})

CapitalIncreaseSchema.virtual('commercial', {
    ref: Commercial.name,
    localField: 'commercialId',
    foreignField: '_id',
    justOne: true,
})

CapitalIncreaseSchema.virtual('payments', {
    ref: Payment.name,
    localField: '_id',
    foreignField: 'parentId',
    justOne: false,
})