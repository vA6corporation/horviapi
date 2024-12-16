import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Partnership } from './partnership.schema';
import * as mongoose from 'mongoose';
import { User } from './user.schema';

export type InsuranceBusinessDocument = InsuranceBusiness & Document;

@Schema({ timestamps: true })
export class InsuranceBusiness {

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

    @Prop({ type: String, default: '' })
    address!: String

    @Prop({ type: Date, default: null })
    birthDate!: string

    @Prop({ type: String, default: '' })
    representative!: string

    @Prop({ type: String, default: '' })
    representativeDocument!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    userId!: string

}

export const InsuranceBusinessSchema = SchemaFactory.createForClass(InsuranceBusiness)

InsuranceBusinessSchema.virtual('partnership', {
    ref: Partnership.name,
    localField: 'partnershipId',
    foreignField: '_id',
    justOne: true,
})