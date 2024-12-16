import * as mongoose from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from './user.schema';

export type FacilityCreditDocument = FacilityCredit & Document;

@Schema({ timestamps: true })
export class FacilityCredit {

    _id!: Types.ObjectId

    @Prop({ type: String, required: true })
    financier!: string

    @Prop({ type: String, required: true })
    creditNumber!: string

    @Prop({ type: String, required: true })
    modality!: string

    @Prop({ type: Number, required: true })
    creditLine!: number

    @Prop({ type: String, required: true })
    guaranteeGranted!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Business', required: true })
    businessId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    userId!: string

}

export const FacilityCreditSchema = SchemaFactory.createForClass(FacilityCredit)