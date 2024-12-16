import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';

export type ChequeDocument = Cheque & Document

@Schema({ timestamps: true })
export class Cheque {

    _id!: Types.ObjectId

    @Prop({ type: String, default: '' })
    observations!: string

    @Prop({ type: Number, required: true })
    price!: number

    @Prop({ type: Boolean, default: false })
    isPaid!: boolean

    @Prop({ type: Date, required: true })
    paymentAt!: any

    @Prop({ type: Date, default: null })
    extensionAt!: any

    @Prop({ type: Date, default: null })
    deletedAt!: any

    @Prop({ type: String, required: true })
    currencyCode!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    suretyId!: any

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    userId!: any

}

export const ChequeSchema = SchemaFactory.createForClass(Cheque)

ChequeSchema.set('toObject', { virtuals: true })

ChequeSchema.virtual('surety', {
    ref: 'Surety',
    localField: 'suretyId',
    foreignField: '_id',
    justOne: true,
})