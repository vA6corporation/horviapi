import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';

export type FinancierDocument = Financier & Document;

@Schema({ timestamps: true })
export class Financier {

    _id!: Types.ObjectId

    @Prop({ type: String, required: true })
    document!: string

    @Prop({ type: String, required: true })
    name!: string

    @Prop({ type: String, default: null })
    deletedAt!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    userId!: string

}

export const FinancierSchema = SchemaFactory.createForClass(Financier);