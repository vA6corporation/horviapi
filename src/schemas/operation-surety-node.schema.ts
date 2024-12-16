import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document, Types } from 'mongoose';

export type OperationSuretyNodeDocument = OperationSuretyNode & Document;

@Schema({ timestamps: true })
export class OperationSuretyNode {

    readonly _id!: Types.ObjectId

    @Prop({ type: String, required: true })
    readonly name!: string

    @Prop({ type: String, required: true })
    readonly mimeType!: string

    @Prop({ type: String, required: true })
    readonly fileType!: string

    @Prop({ type: Number, required: true })
    readonly size!: number

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    readonly operationSuretyId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    readonly userId!: string

}

export const OperationSuretyNodeSchema = SchemaFactory.createForClass(OperationSuretyNode)

OperationSuretyNodeSchema.set('toObject', { virtuals: true })