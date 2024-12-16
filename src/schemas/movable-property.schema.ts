import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type MovablePropertyDocument = MovableProperty & Document;

@Schema({ timestamps: true })
export class MovableProperty extends Document {

    _id!: Types.ObjectId

    @Prop({ type: String, required: true })
    description!: string

    @Prop({ type: String, required: true })
    modelo!: string

    @Prop({ type: Number, required: true })
    year!: number

    @Prop({ type: String, required: true })
    placa!: string

    @Prop({ type: String, required: true })
    serie!: string

    @Prop({ type: Number, required: true })
    commercialPrice!: number

    @Prop({ type: Number, default: null })
    warrantyPrice!: number

    @Prop({ type: Number, default: null })
    debtPrice!: number

    @Prop({ type: String, default: '' })
    financier!: string

    @Prop({ type: Number, required: true })
    encumbrance!: number

    @Prop({ type: Boolean, required: true })
    isWarranty!: boolean

    @Prop({ type: String, required: true })
    Brand!: string

    @Prop({ type: String, required: true })
    Antiquity!: string

    @Prop({ type: String, required: true })
    capacity!: string

    @Prop({ type: String, required: true })
    location!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    businessId!: string

    @Prop({ type: String, enum: ['Business', 'Shareholder'], required: true })
    onModel!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    userId!: string
}

export const MovablePropertySchema = SchemaFactory.createForClass(MovableProperty)
