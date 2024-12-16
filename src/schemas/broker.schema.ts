import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';

export type BrokerDocument = Broker & Document;

@Schema({ timestamps: true })
export class Broker {

    _id!: Types.ObjectId

    @Prop({ type: String, required: true, enum: ['DNI', 'RUC', 'CE'] })
    documentType!: string

    @Prop({ type: String, required: true })
    document!: string

    @Prop({ type: String, required: true })
    name!: string

    @Prop({ type: String, required: true })
    email!: string

    @Prop({ type: String, default: '' })
    mobileNumber!: string

    @Prop({ type: String, default: '' })
    phoneNumber!: string

    @Prop({ type: String, default: '' })
    annexed!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    userId!: string

}

export const BrokerSchema = SchemaFactory.createForClass(Broker)