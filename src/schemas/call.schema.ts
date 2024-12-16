import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document, Types } from 'mongoose';

export type CallDocument = Call & Document;

@Schema({ timestamps: true })
export class Call {

    _id!: Types.ObjectId

    @Prop({ type: Date, required: true })
    readonly scheduledAt!: string

    @Prop({ type: Date, default: null })
    readonly deletedAt!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    readonly seaceId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    readonly userId!: string

}

export const CallSchema = SchemaFactory.createForClass(Call)

CallSchema.set('toObject', { virtuals: true })

CallSchema.virtual('seace', {
    ref: 'Seace',
    localField: 'seaceId',
    foreignField: '_id',
    justOne: true,
})