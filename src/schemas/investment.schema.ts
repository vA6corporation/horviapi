import * as mongoose from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type InvestmentDocument = Investment & Document;

@Schema({ timestamps: true })
export class Investment {

    _id!: Types.ObjectId

    @Prop({ type: String, required: true })
    type!: string

    @Prop({ type: String, required: true })
    typeAccount!: string

    @Prop({ type: String, required: true })
    bankDetail!: string

    @Prop({ type: Number, required: true })
    gravamen!: number

    @Prop({ type: Number, required: true })
    comercialPrice!: number

    @Prop({ type: Number, required: true })
    quantity!: number

    @Prop({ type: Number, required: true })
    price!: number

    @Prop({ type: String, enum: ['Business', 'Shareholder'], required: true })
    onModel!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    businessId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    userId!: string

}

export const InvestmentSchema = SchemaFactory.createForClass(Investment)