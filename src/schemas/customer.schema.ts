import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';

export type CustomerDocument = Customer & Document

@Schema({ timestamps: true })
export class Customer {

    _id!: Types.ObjectId

    @Prop({ type: String, required: true })
    readonly documentType!: string

    @Prop({ type: String, required: true })
    readonly document!: string

    @Prop({ type: String, required: true })
    readonly name!: string

    @Prop({ type: String, default: '' })
    readonly partnershipName!: string

    @Prop({ type: String, required: true })
    readonly email!: string

    @Prop({ type: String, required: true })
    readonly mobileNumber!: string

    @Prop({ type: String, required: true })
    readonly address!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    readonly userId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    readonly commercialId!: string

}

export const CustomerSchema = SchemaFactory.createForClass(Customer)

CustomerSchema.set('toObject', { virtuals: true })