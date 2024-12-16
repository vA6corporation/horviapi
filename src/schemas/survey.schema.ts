import * as mongoose from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export enum TimeType {
    NEW_CUSTOMER,
    ONE_TO_SIX_MONTHS,
    SIX_MONTHS_TO_ONE_YEAR,
    ONE_YEAR_TO_MORE
}

export enum ExperienceAdvisorType {
    ONE,
    TWO,
    THREE,
    FOUR,
    FIVE,
}

export enum ExperienceDoubtType {
    ONE,
    TWO,
    THREE,
    FOUR,
    FIVE,
}

export enum ExperienceAttentionType {
    BAD,
    REGULAR,
    GOOD,
    EXCELLENT,
}

export enum ExperienceRecommendType {
    ONE,
    TWO,
    THREE,
    FOUR,
    FIVE
}

export type SurveyDocument = Survey & Document;

@Schema({ timestamps: true })
export class Survey {

    _id!: Types.ObjectId

    @Prop({ type: String })
    fromCountry!: string

    @Prop({ type: String })
    suggestion!: string

    @Prop({ type: Number, enum: TimeType })
    time!: number

    @Prop({ type: Number, enum: ExperienceAdvisorType })
    experienceAdvisor!: number

    @Prop({ type: Number, enum: ExperienceAttentionType })
    experienceAttention!: number

    @Prop({ type: Number, enum: ExperienceRecommendType })
    experienceRecommend!: number

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    businessId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    userId!: string

    createdAt!: string

}

export const SurveySchema = SchemaFactory.createForClass(Survey)

SurveySchema.set('toObject', { virtuals: true })

SurveySchema.virtual('business', {
    ref: 'Business',   // the model to use
    localField: 'businessId',  // find children where 'localField'
    foreignField: '_id', // is equal to foreignField
    justOne: true //if return an Object or an Array
})
