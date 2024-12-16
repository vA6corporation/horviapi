import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';

export type MailDocument = Mail & Document;

@Schema({ timestamps: true })
export class Mail {

  _id!: Types.ObjectId;
  
  @Prop({ type: String, required: true })
  id!: string;

  @Prop({ type: String, required: true })
  message!: string;

  @Prop({ type: String, required: true })
  to!: string;

  @Prop({ type: String, required: true })
  onModel!: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, refPath: 'onModel', required: true })
  guaranteeId!: string|any;

}

export const MailSchema = SchemaFactory.createForClass(Mail);

MailSchema.set('toObject', { virtuals: true });

MailSchema.virtual('guarantee', {
  refPath: 'onModel',
  localField: 'guaranteeId',
  foreignField: '_id',
  justOne: true,
});

MailSchema.virtual('user', {
  ref: 'User',
  localField: 'userId',
  foreignField: '_id',
  justOne: true,
});