import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ExperiencePartnershipDocument, ExperiencePartnershipSchema } from './experience-partnership.schema';

export type ExperienceDocument = Experience & Document;

@Schema({ timestamps: true })
export class Experience {

    _id!: Types.ObjectId

    @Prop({ type: String, required: true })
    convener!: string

    @Prop({ type: String, required: true })
    objectDescription!: string

    @Prop({ type: String, required: true })
    objectContract!: string

    @Prop({ type: String, required: true })
    signaturedAt!: string

    @Prop({ type: String, required: true })
    startAt!: string

    @Prop({ type: String, required: true })
    endAt!: string

    @Prop({ type: String, required: true })
    location!: string

    @Prop({ type: Number, required: true })
    price!: number

    @Prop({ type: Number, required: true })
    daysLimit!: number

    @Prop({ type: Boolean, required: true })
    isCompleted!: boolean

    @Prop({ type: Boolean, required: true })
    isOperator!: boolean

    @Prop({ type: Number, required: true })
    advancedPercent!: number

    @Prop({ type: [ExperiencePartnershipSchema], default: [] })
    experiencePartnerships!: ExperiencePartnershipDocument[]

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true })
    businessId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
    userId!: string

}

export const ExperienceSchema = SchemaFactory.createForClass(Experience)
