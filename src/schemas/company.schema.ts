import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CompanyDocument = Company & Document;

@Schema({ timestamps: true })
export class Company {

    _id!: Types.ObjectId

    @Prop({ type: String, required: true })
    document!: string

    @Prop({ type: String, required: true })
    name!: string

    @Prop({ type: String, required: true })
    email!: string

    @Prop({ type: String, required: true })
    address!: string

    @Prop({ type: String, required: true })
    mobileNumber!: string

}

export const CompanySchema = SchemaFactory.createForClass(Company)

CompanySchema.set('toObject', { virtuals: true })