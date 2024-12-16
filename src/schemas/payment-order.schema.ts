import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document, Types } from 'mongoose';
import { Bank } from './bank.schema';
import { Provider } from './provider.schema';
import { User } from './user.schema';

export type PaymentOrderDocument = PaymentOrder & Document;

@Schema({ timestamps: true })
export class PaymentOrder {

    _id!: Types.ObjectId

    @Prop({ type: String, required: true })
    concept!: string

    @Prop({ type: String, required: true })
    serie!: string

    @Prop({ type: Number, required: true })
    charge!: number

    @Prop({ type: String, default: '' })
    observations!: string

    @Prop({ type: Date, default: Date.now })
    paymentAt!: any

    @Prop({ type: Boolean, required: true })
    isPaid!: boolean

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Bank.name, required: true })
    bankId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Provider.name, required: true })
    providerId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    userId!: string

}

export const PaymentOrderSchema = SchemaFactory.createForClass(PaymentOrder)

PaymentOrderSchema.set('toObject', { virtuals: true })

PaymentOrderSchema.virtual('provider', {
    ref: Provider.name,   // the model to use
    localField: 'providerId',  // find children where 'localField'
    foreignField: '_id', // is equal to foreignField
    justOne: true, //if return an Object or an Array
})

PaymentOrderSchema.virtual('bank', {
    ref: Bank.name,   // the model to use
    localField: 'bankId',  // find children where 'localField'
    foreignField: '_id', // is equal to foreignField
    justOne: true, //if return an Object or an Array
})