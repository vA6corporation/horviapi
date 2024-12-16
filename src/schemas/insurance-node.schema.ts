import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';
import { Insurance } from './insurance.schema';

export type InsuranceNodeDocument = InsuranceNode & Document;

@Schema({ timestamps: true })
export class InsuranceNode {

    readonly _id!: Types.ObjectId

    @Prop({ type: String, required: true })
    readonly name!: string

    @Prop({ type: String, required: true })
    readonly mimeType!: string

    @Prop({ type: String, required: true })
    readonly fileType!: string

    @Prop({ type: Number, required: true })
    readonly size!: number

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Insurance.name, required: true })
    readonly insuranceId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    readonly userId!: string

}

export const InsuranceNodeSchema = SchemaFactory.createForClass(InsuranceNode)

InsuranceNodeSchema.set('toObject', { virtuals: true })