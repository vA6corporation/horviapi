import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type InsuranceGroupDocument = InsuranceGroup & Document

@Schema({ timestamps: true })
export class InsuranceGroup {

  _id!: Types.ObjectId
  
}

export const InsuranceGroupSchema = SchemaFactory.createForClass(InsuranceGroup)

InsuranceGroupSchema.set('toObject', { virtuals: true })