import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from './user.schema';
import * as mongoose from 'mongoose';
import { Business } from './business.schema';
import { InsuranceBusiness } from './insurance-business.schema';

export type InsurancePartnershipDocument = InsurancePartnership & Document;

@Schema({ timestamps: true })
export class InsurancePartnership {

    _id!: Types.ObjectId

    @Prop({ type: String, default: '' })
    document!: string

    @Prop({ type: String, required: true })
    name!: string

    @Prop({ type: String, default: '' })
    address!: string

    @Prop({ type: String, required: true })
    representative!: string

    @Prop({ type: String, required: true })
    representativeDocument!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true, default: null })
    businessId!: string

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Business' }] })
    businessIds!: any

    businesses!: Business[]

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    userId!: string

}

export const InsurancePartnershipSchema = SchemaFactory.createForClass(InsurancePartnership)

InsurancePartnershipSchema.set('toObject', { virtuals: true })

InsurancePartnershipSchema.virtual('businesses', {
    ref: InsuranceBusiness.name,
    localField: 'businessIds',
    foreignField: '_id',
    justOne: false,
})

