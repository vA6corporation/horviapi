import * as mongoose from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PaymentDocument = Payment & Document

@Schema({ timestamps: true })
export class Payment extends Document {

    _id!: Types.ObjectId

    @Prop({ type: Number, required: true })
    charge!: number

    @Prop({ type: Date, required: true })
    paymentAt!: any

    @Prop({ type: String, default: '' })
    observations!: string

    @Prop({ type: Date, default: null })
    deletedAt!: any

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    parentId!: string

    @Prop({ type: String, enum: ['Tender', 'Surety'], required: true })
    onModel!: string

    // @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    // bankId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    userId!: string

}

export const PaymentSchema = SchemaFactory.createForClass(Payment)

PaymentSchema.set('toObject', { virtuals: true })

PaymentSchema.virtual('bank', {
    ref: 'Bank',   // the model to use
    localField: 'bankId',  // find children where 'localField'
    foreignField: '_id', // is equal to foreignField
    justOne: true //if return an Object or an Array
})