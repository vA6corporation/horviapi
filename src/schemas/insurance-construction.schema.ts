import * as mongoose from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from './user.schema';
import { InsuranceBusiness } from './insurance-business.schema';

export type InsuranceConstructionDocument = InsuranceConstruction & Document;

@Schema({ timestamps: true })
export class InsuranceConstruction {

    _id!: Types.ObjectId

    @Prop({ type: String, required: true })
    object!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: InsuranceBusiness.name, default: null })
    businessId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    userId!: string

}

export const InsuranceConstructionSchema = SchemaFactory.createForClass(InsuranceConstruction)

InsuranceConstructionSchema.set('toObject', { virtuals: true })

InsuranceConstructionSchema.virtual('business', {
    ref: InsuranceBusiness.name,
    localField: 'businessId',
    foreignField: '_id',
    justOne: true,
})