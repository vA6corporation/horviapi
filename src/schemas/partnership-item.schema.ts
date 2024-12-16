import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from './user.schema';
import { Business } from './business.schema';
import { Partnership } from './partnership.schema';
import * as mongoose from 'mongoose';

export type PartnershipItemDocument = PartnershipItem & Document;

@Schema({ timestamps: true })
export class PartnershipItem {

    _id!: Types.ObjectId

    @Prop({ type: Number, required: true })
    percent!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Partnership.name, required: true })
    partnershipId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Business.name, required: true })
    businessId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    userId!: string

}

export const PartnershipItemSchema = SchemaFactory.createForClass(PartnershipItem)

PartnershipItemSchema.set('toObject', { virtuals: true })

PartnershipItemSchema.virtual('business', {
    ref: 'Business',
    localField: 'businessId',
    foreignField: '_id',
    justOne: true,
})
