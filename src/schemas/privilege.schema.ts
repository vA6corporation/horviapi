import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document, Types } from 'mongoose';
import { User } from './user.schema';

export type PrivilegeDocument = Privilege & Document;

@Schema({ timestamps: true })
export class Privilege {

    _id!: Types.ObjectId

    @Prop({ type: Boolean, default: false })
    seaces!: boolean

    @Prop({ type: Boolean, default: false })
    operations!: boolean

    @Prop({ type: Boolean, default: false })
    notifications!: boolean

    @Prop({ type: Boolean, default: false })
    sureties!: boolean

    @Prop({ type: Boolean, default: false })
    renovations!: boolean

    @Prop({ type: Boolean, default: false })
    tenders!: boolean

    @Prop({ type: Boolean, default: false })
    businesses!: boolean

    @Prop({ type: Boolean, default: false })
    beneficiaries!: boolean

    @Prop({ type: Boolean, default: false })
    partnerships!: boolean

    @Prop({ type: Boolean, default: false })
    shareholders!: boolean

    @Prop({ type: Boolean, default: false })
    financiers!: boolean

    @Prop({ type: Boolean, default: false })
    templates!: boolean

    @Prop({ type: Boolean, default: false })
    users!: boolean

    @Prop({ type: Boolean, default: false })
    commercials!: boolean

    @Prop({ type: Boolean, default: false })
    customers!: boolean

    @Prop({ type: Boolean, default: false })
    insurances!: boolean

    @Prop({ type: Boolean, default: false })
    accounting!: boolean

    @Prop({ type: Boolean, default: false })
    reports!: boolean

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    userId!: string

}

export const PrivilegeSchema = SchemaFactory.createForClass(Privilege)