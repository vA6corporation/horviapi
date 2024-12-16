import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';

export type PartnershipDocument = Partnership & Document

@Schema({ timestamps: true })
export class Partnership {

    _id!: Types.ObjectId

    @Prop({ type: String, default: '' })
    document!: string

    @Prop({ type: String, required: true })
    name!: string

    @Prop({ type: String, default: '' })
    phoneNumber!: string

    @Prop({ type: String, default: '' })
    address!: string

    @Prop({ type: String, default: '' })
    mobileNumber!: string

    @Prop({ type: String, default: '' })
    email!: string

    @Prop({ type: Date, default: null })
    constitutedAt!: string

    @Prop({ type: String, required: true })
    representativeName!: string

    @Prop({ type: String, required: true })
    representativeDocumentType!: string

    @Prop({ type: String, required: true })
    representativeDocument!: string

    @Prop({ type: String, default: '' })
    representativeNationality!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, default: null })
    businessId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    userId!: string

}

export const PartnershipSchema = SchemaFactory.createForClass(Partnership)

PartnershipSchema.set('toObject', { virtuals: true })

PartnershipSchema.virtual('partnershipItems', {
    ref: 'PartnershipItem',
    localField: '_id',
    foreignField: 'partnershipId',
    justOne: false,
})

PartnershipSchema.virtual('business', {
    ref: 'Business',
    localField: 'businessId',
    foreignField: '_id',
    justOne: true,
})
