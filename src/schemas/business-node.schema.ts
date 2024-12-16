import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type BusinessNodeDocument = BusinessNode & Document;

@Schema({ timestamps: true })
export class BusinessNode {

    _id!: string

    @Prop({ type: String, required: true })
    name!: string

    @Prop({ type: String, required: true })
    type!: string

    @Prop({ type: String, default: '' })
    contentType!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, default: null })
    fileId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, default: null })
    businessNodeId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    businessId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    userId!: string

}

export const BusinessNodeSchema = SchemaFactory.createForClass(BusinessNode);

BusinessNodeSchema.set('toObject', { virtuals: true })

BusinessNodeSchema.virtual('childrens', {
    ref: BusinessNode.name,
    localField: '_id',
    foreignField: 'businessNodeId',
    justOne: false,
})