import * as mongoose from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from './user.schema';
import { Business } from './business.schema';

export type IncomeDocument = Income & Document;

@Schema({ timestamps: true })
export class Income {

    _id!: Types.ObjectId

    @Prop({ type: String, required: true })
    description!: string

    @Prop({ type: String, required: true })
    typeIncome!: string

    @Prop({ type: String, required: true })
    origin!: string

    @Prop({ type: Number, required: true })
    amount!: number

    @Prop({ type: String, enum: ['Business', 'Shareholder'], required: true })
    onModel!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true })
    businessId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    userId!: string

}

export const IncomeSchema = SchemaFactory.createForClass(Income)