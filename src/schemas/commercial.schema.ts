import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type CommercialDocument = Commercial & Document

@Schema({ timestamps: true })
export class Commercial {

    _id!: Types.ObjectId

    @Prop({ type: String, required: true })
    name!: string

    @Prop({ type: Date, default: null })
    deletedAt!: string

}

export const CommercialSchema = SchemaFactory.createForClass(Commercial)

CommercialSchema.set('toObject', { virtuals: true })