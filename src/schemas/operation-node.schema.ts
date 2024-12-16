import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type OperationNodeDocument = OperationNode & Document;

@Schema({ timestamps: true })
export class OperationNode extends Document {

    _id!: string

    @Prop({ type: String, required: true })
    name!: string

    @Prop({ type: String, default: '' })
    contentType!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, default: null })
    fileId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, default: null })
    operationNodeId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    operationId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    userId!: string

}

export const OperationNodeSchema = SchemaFactory.createForClass(OperationNode)

OperationNodeSchema.set('toObject', { virtuals: true })

OperationNodeSchema.virtual('childrens', {
    ref: OperationNode.name,
    localField: '_id',
    foreignField: 'operationNodeId',
    justOne: false,
})