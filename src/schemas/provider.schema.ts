import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document, Types } from 'mongoose';

export type ProviderDocument = Provider & Document;

@Schema({ timestamps: true })
export class Provider extends Document {

    _id!: Types.ObjectId

    @Prop({ type: String, enum: ['RUC', 'DNI', 'CE'], default: "DNI" })
    documentType!: string

    @Prop({ type: String, maxlength: 11, default: null })
    document!: string | null

    @Prop({ type: String, required: true })
    name!: string

    @Prop({ type: String, maxlength: 240, default: null })
    address!: string

    @Prop({ type: String, default: '' })
    mobileNumber!: string

    @Prop({ type: String, default: '' })
    email!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
    userId!: string

}

export const ProviderSchema = SchemaFactory.createForClass(Provider)

ProviderSchema.set('toObject', { virtuals: true })