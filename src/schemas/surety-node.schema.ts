import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';
import { Surety } from './surety.schema';

export type SuretyNodeDocument = SuretyNode & Document;

@Schema({ timestamps: true })
export class SuretyNode {

    _id!: Types.ObjectId

    @Prop({ type: String, required: true })
    readonly name!: string

    @Prop({ type: String, required: true })
    readonly mimeType!: string

    @Prop({ type: String, required: true })
    readonly fileType!: string

    @Prop({ type: Number, required: true })
    readonly size!: number

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Surety.name, required: true })
    readonly suretyId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    readonly userId!: string

}

export const SuretyNodeSchema = SchemaFactory.createForClass(SuretyNode)

SuretyNodeSchema.set('toObject', { virtuals: true })