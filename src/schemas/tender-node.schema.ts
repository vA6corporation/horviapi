import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';
import { Tender } from './tender.schema';

export type TenderNodeDocument = TenderNode & Document;

@Schema({ timestamps: true })
export class TenderNode {

    readonly _id!: Types.ObjectId

    @Prop({ type: String, required: true })
    readonly name!: string

    @Prop({ type: String, required: true })
    readonly mimeType!: string

    @Prop({ type: String, required: true })
    readonly fileType!: string

    @Prop({ type: Number, required: true })
    readonly size!: number

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Tender.name, required: true })
    readonly tenderId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    readonly userId!: string

}

export const TenderNodeSchema = SchemaFactory.createForClass(TenderNode)

TenderNodeSchema.set('toObject', { virtuals: true })