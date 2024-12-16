import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Certifier } from './certifier.schema';
import { Customer } from './customer.schema';
import { Payment } from './payment.schema';
import { User } from './user.schema';
import { Commercial } from './commercial.schema';

enum IsoType {
    PACK4 = 'PACK4',
    ISO90001 = '90001',
    ISO37001 = '37001',
    ISO45001 = '45001',
    ISO14001 = '14001',
}

export type IsoDocument = Iso & Document;

@Schema({ timestamps: true })
export class Iso {

    _id!: string

    @Prop({ type: [String], default: [] })
    types!: String

    @Prop({ type: Date, required: true })
    emitionAt!: string

    @Prop({ type: Number, required: true })
    charge!: number

    @Prop({ type: Number, default: null })
    commission!: number

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Customer.name, required: true })
    customerId!: any

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Certifier.name, required: true })
    certifierId!: any

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Worker.name, required: true })
    commercialId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    userId!: string

}

export const IsoSchema = SchemaFactory.createForClass(Iso)

IsoSchema.set('toObject', { virtuals: true })

IsoSchema.virtual('customer', {
    ref: Customer.name,
    localField: 'customerId',
    foreignField: '_id',
    justOne: true,
})

IsoSchema.virtual('certifier', {
    ref: Certifier.name,
    localField: 'certifierId',
    foreignField: '_id',
    justOne: true,
})

IsoSchema.virtual('commercial', {
    ref: Commercial.name,
    localField: 'commercialId',
    foreignField: '_id',
    justOne: true,
})

IsoSchema.virtual('payments', {
    ref: Payment.name,
    localField: '_id',
    foreignField: 'parentId',
    justOne: false,
})