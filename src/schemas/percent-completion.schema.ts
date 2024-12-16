import * as mongoose from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PercentCompletionDocument = PercentCompletion & Document;

@Schema({ timestamps: true })
export class PercentCompletion extends Document {

    _id!: Types.ObjectId

    @Prop({ type: Number, required: true })
    year!: number

    @Prop({ type: Number, required: true })
    month!: number

    @Prop({ type: Date, required: true })
    programmatedAt!: any

    @Prop({ type: Number, required: true })
    percentProgrammated!: number

    @Prop({ type: Number, required: true })
    percentCompletion!: number

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    constructionId!: string

}

export const PercentCompletionSchema = SchemaFactory.createForClass(PercentCompletion)