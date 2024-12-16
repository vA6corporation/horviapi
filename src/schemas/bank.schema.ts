import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type BankDocument = Bank & Document;

@Schema({ timestamps: true })
export class Bank {

    _id!: Types.ObjectId

    @Prop({ type: String, required: true })
    name!: string

    @Prop({ type: String, required: true })
    bankName!: string

    @Prop({ type: String, required: true })
    accountNumber!: string

    @Prop({ type: String, required: true })
    cci!: string

    @Prop({ type: String, required: true })
    accountType!: string

    @Prop({ type: String, required: true })
    currencyCode!: string

}

export const BankSchema = SchemaFactory.createForClass(Bank);