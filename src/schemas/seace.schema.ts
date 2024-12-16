import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document, Types } from 'mongoose';

export type SeaceDocument = Seace & Document;

export enum SeaceState {
    ADJUDICADO = 'Adjudicado',
    CONSENTIDO = 'Consentido'
}

@Schema({ timestamps: true })
export class Seace {

    _id!: Types.ObjectId
    
    @Prop({ type: String, required: true })
    idProcess!: string

    @Prop({ type: Date, required: true })
    publishedAt!: string

    @Prop({ type: Date, required: true })
    goodProAt!: string
    
    @Prop({ type: Date, default: null })
    offerAt!: string | null

    @Prop({ type: Date, default: null })
    offerEndAt!: string | null

    @Prop({ type: Date, default: null })
    adjudicatedAt!: string | null

    @Prop({ type: String, required: true })
    objectContract!: string

    @Prop({ type: String, required: true })
    objectDescription!: string

    @Prop({ type: String, required: true })
    convener!: string

    @Prop({ type: String, required: true })
    nomenclature!: string

    @Prop({ type: Number, default: null })
    referenceValue!: number | null

    @Prop({ type: String, required: true })
    state!: string

    @Prop({ type: String, required: true })
    department!: string

    @Prop({ type: Boolean, required: true })
    isOfferAtag!: string

    @Prop({ type: Boolean, required: true })
    isBaseAtag!: string

    @Prop({ type: [String], required: true })
    winners!: string[]

    @Prop({ type: String, default: '' })
    color!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, default: null })
    commercialId!: Types.ObjectId | null

    @Prop({ type: String, default: '' })
    observations!: string

}

export const SeaceSchema = SchemaFactory.createForClass(Seace)

SeaceSchema.set('toObject', { virtuals: true })

SeaceSchema.virtual('notification', {
    ref: 'Notification',   // the model to use
    localField: '_id',  // find children where 'localField'
    foreignField: 'seaceId', // is equal to foreignField
    justOne: true, //if return an Object or an Array
})

SeaceSchema.virtual('commercial', {
    ref: 'Commercial',   // the model to use
    localField: 'commercialId',  // find children where 'localField'
    foreignField: '_id', // is equal to foreignField
    justOne: true, //if return an Object or an Array
})

SeaceSchema.virtual('operation', {
    ref: 'Operation',
    localField: '_id',
    foreignField: 'seaceId',
    justOne: true,
})

SeaceSchema.virtual('nodes', {
    ref: 'SeaceNode',
    localField: '_id',
    foreignField: 'seaceId',
    justOne: false,
})