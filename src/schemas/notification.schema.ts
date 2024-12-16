import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document, Types } from 'mongoose';
import { Business } from './business.schema';
import { Commercial } from './commercial.schema';
import { Seace } from './seace.schema';

export type NotificationDocument = Notification & Document;

@Schema({ timestamps: true })
export class Notification extends Document {

    _id!: Types.ObjectId

    @Prop({ type: Date, required: true })
    publishedAt!: string

    @Prop({ type: Date, default: null })
    adjudicatedAt!: string | null

    @Prop({ type: String, required: true })
    objectContract!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Business.name, required: true })
    businessId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Commercial.name, required: true })
    commercialId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Seace.name, required: true })
    seaceId!: string

}

export const NotificationSchema = SchemaFactory.createForClass(Notification)

NotificationSchema.set('toObject', { virtuals: true })

NotificationSchema.virtual('business', {
    ref: 'Business',   // the model to use
    localField: 'businessId',  // find children where 'localField'
    foreignField: '_id', // is equal to foreignField
    justOne: true, //if return an Object or an Array
})

NotificationSchema.virtual('seace', {
    ref: 'Seace',   // the model to use
    localField: 'seaceId',  // find children where 'localField'
    foreignField: '_id', // is equal to foreignField
    justOne: true, //if return an Object or an Array
})

NotificationSchema.virtual('commercial', {
    ref: 'Commercial',   // the model to use
    localField: 'commercialId',  // find children where 'localField'
    foreignField: '_id', // is equal to foreignField
    justOne: true, //if return an Object or an Array
})
