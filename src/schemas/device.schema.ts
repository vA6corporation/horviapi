import * as mongoose from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type DeviceDocument = Device & Document;

@Schema({ timestamps: true })
export class Device {

    _id!: Types.ObjectId

    @Prop({ type: String, required: true })
    deviceId!: string

    @Prop({ type: String, required: true })
    name!: string

    @Prop({ type: Boolean, default: false })
    isActive!: boolean

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    userId!: string

}

export const DeviceSchema = SchemaFactory.createForClass(Device)