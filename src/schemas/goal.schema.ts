import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type GoalDocument = Goal & Document;

@Schema({ timestamps: true })
export class Goal {

  _id!: Types.ObjectId;

  @Prop({ type: Number, required: true })
  year!: number;
  
  @Prop({ type: Number, required: true })
  january!: number;

  @Prop({ type: Number, required: true })
  february!: number;

  @Prop({ type: Number, required: true })
  march!: number;

  @Prop({ type: Number, required: true })
  april!: number;

  @Prop({ type: Number, required: true })
  may!: number;

  @Prop({ type: Number, required: true })
  june!: number;

  @Prop({ type: Number, required: true })
  july!: number;

  @Prop({ type: Number, required: true })
  august!: number;

  @Prop({ type: Number, required: true })
  september!: number;

  @Prop({ type: Number, required: true })
  october!: number;

  @Prop({ type: Number, required: true })
  november!: number;

  @Prop({ type: Number, required: true })
  december!: number;
  
}

export const GoalSchema = SchemaFactory.createForClass(Goal);