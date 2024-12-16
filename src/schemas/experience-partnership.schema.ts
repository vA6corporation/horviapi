import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ExperiencePartnershipDocument = ExperiencePartnership & Document;

@Schema({ timestamps: true })
export class ExperiencePartnership {

    _id!: Types.ObjectId

    @Prop({ type: String })
    name!: string

    @Prop({ type: Number })
    participationPercent!: number

}

export const ExperiencePartnershipSchema = SchemaFactory.createForClass(ExperiencePartnership)
