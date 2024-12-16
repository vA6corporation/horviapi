import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from './user.schema';
import * as mongoose from 'mongoose'

export type PropertyDocument = Property & Document;

@Schema({ timestamps: true })
export class Property {

    _id!: Types.ObjectId

    @Prop({ type: String, required: true })
    description!: string

    @Prop({ type: String, required: true })
    location!: string

    @Prop({ type: Number, required: true })
    landArea!: number

    @Prop({ type: Number, required: true })
    constructionArea!: number

    @Prop({ type: Number, required: true })
    commercialPrice!: number

    @Prop({ type: Number, default: null })
    mortgagePrice!: number

    @Prop({ type: Number, default: null })
    debt!: number

    @Prop({ type: String, default: '' })
    financier!: string

    @Prop({ type: String, required: true })
    inscription!: string

    @Prop({ type: Date, required: true })
    purchaseAt!: string

    @Prop({ type: Number, required: true })
    encumbrance!: number

    @Prop({ type: Boolean, required: true })
    isMortgage!: boolean

    @Prop({ type: Boolean, required: true })
    isFamiliarPatrimony!: boolean

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    businessId!: string

    @Prop({ type: String, enum: ['Business', 'Shareholder'], required: true })
    onModel!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    userId!: string

}

export const PropertySchema = SchemaFactory.createForClass(Property)