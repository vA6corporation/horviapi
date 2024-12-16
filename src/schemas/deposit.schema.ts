import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';

export type DepositDocument = Deposit & Document;

@Schema({ timestamps: true })
export class Deposit {
    
    _id!: Types.ObjectId

    @Prop({ type: Number, required: true })
    price!: number

    @Prop({ type: String, required: true })
    currencyCode!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    suretyId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    userId!: string

}

export const DepositSchema = SchemaFactory.createForClass(Deposit)