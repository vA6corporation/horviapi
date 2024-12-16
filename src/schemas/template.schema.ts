import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document, Types } from 'mongoose';
import { Beneficiary } from './beneficiary.schema';
import { Business } from './business.schema';
import { User } from './user.schema';
import { Partnership } from './partnership.schema';

export type TemplateDocument = Template & Document

@Schema({ timestamps: true })
export class Template {

    _id!: Types.ObjectId

    @Prop({ type: String, required: true })
    objectDescription!: string

    @Prop({ type: String, required: true })
    executionPlace!: string

    @Prop({ type: Number, required: true })
    baseBudget!: number

    @Prop({ type: Number, required: true })
    contractAmount!: number

    @Prop({ type: Number, required: true })
    daysLimit!: number

    @Prop({ type: String, required: false })
    depositorName!: string

    @Prop({ type: String, required: true })
    startAt!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Partnership.name, default: null })
    partnershipId!: any

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Business.name, required: true })
    businessId!: any

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Beneficiary.name, required: true })
    beneficiaryId!: any

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    userId!: string

}

export const TemplateSchema = SchemaFactory.createForClass(Template)

TemplateSchema.set('toObject', { virtuals: true })

TemplateSchema.virtual('partnership', {
    ref: Partnership.name,
    localField: 'partnershipId',
    foreignField: '_id',
    justOne: true,
})

TemplateSchema.virtual('business', {
    ref: Business.name,
    localField: 'businessId',
    foreignField: '_id',
    justOne: true,
})

TemplateSchema.virtual('beneficiary', {
    ref: Beneficiary.name,
    localField: 'beneficiaryId',
    foreignField: '_id',
    justOne: true,
})

TemplateSchema.virtual('guaranties', {
    ref: 'Guarantee',
    localField: '_id',
    foreignField: 'templateId',
    justOne: false,
})