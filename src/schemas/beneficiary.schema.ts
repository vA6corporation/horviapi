import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document, Types } from 'mongoose';
import { User } from './user.schema';

export type BeneficiaryDocument = Beneficiary & Document;

@Schema({ timestamps: true })
export class Beneficiary {

    _id!: Types.ObjectId

    @Prop({ type: String, required: true })
    document!: string

    @Prop({ type: String, required: true })
    name!: string

    @Prop({ type: String, default: '' })
    email!: string

    @Prop({ type: String, default: '' })
    mobileNumber!: string

    @Prop({ type: String, default: '' })
    phoneNumber!: string

    @Prop({ type: String, default: '' })
    annexed!: string

    @Prop({ type: String, default: '' })
    address!: string

    @Prop({ type: String, required: false })
    legalRepresentative!: string

    @Prop({ type: String, required: false })
    positionLegalRepresentative!: string

    @Prop({ type: String, required: false })
    contactPerson!: string

    @Prop({ type: String, required: false })
    positioncontactPerson!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    userId!: string

}

export const BeneficiarySchema = SchemaFactory.createForClass(Beneficiary)