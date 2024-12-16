import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Broker } from './broker.schema';
import { Business } from './business.schema';
import { Financier } from './financier.schema';
import { Partnership } from './partnership.schema';
import { Payment } from './payment.schema';
import { User } from './user.schema';

export type CreditDocument = Credit & Document;

@Schema({ timestamps: true })
export class Credit {

    _id!: string

    @Prop({ type: Number, required: true })
    days!: number

    @Prop({ type: Date, required: true })
    emitionAt!: string

    @Prop({ type: Number, required: true })
    charge!: number

    @Prop({ type: Number, default: null })
    prima!: number

    @Prop({ type: Number, default: null })
    commission!: number

    @Prop({ type: String, required: true, enum: ['PEN', 'USD'] })
    currencyCode!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Broker.name, default: null })
    partnershipId!: any

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Business.name, required: true })
    businessId!: any

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Financier.name, required: true })
    financierId!: any

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Worker.name, required: true })
    commercialId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    userId!: string

}

export const CreditSchema = SchemaFactory.createForClass(Credit)

CreditSchema.set('toObject', { virtuals: true })

CreditSchema.virtual('business', {
    ref: Business.name,
    localField: 'businessId',
    foreignField: '_id',
    justOne: true,
})

CreditSchema.virtual('financier', {
    ref: Financier.name,
    localField: 'financierId',
    foreignField: '_id',
    justOne: true,
})

CreditSchema.virtual('partnership', {
    ref: Partnership.name,
    localField: 'partnershipId',
    foreignField: '_id',
    justOne: true,
})

CreditSchema.virtual('payments', {
    ref: Payment.name,
    localField: '_id',
    foreignField: 'parentId',
    justOne: false,
})