import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document, Types } from 'mongoose';
import { Commercial } from './commercial.schema';

export type UserDocument = User & Document

@Schema({ timestamps: true })
export class User {

    readonly _id!: Types.ObjectId

    @Prop({ type: String, default: 'Administrador' })
    readonly name!: string

    @Prop({ type: String, required: true })
    readonly email!: string

    @Prop({ type: String, required: true })
    readonly password!: string

    @Prop({ type: Boolean, default: false })
    readonly isAdmin!: boolean

    @Prop({ type: Date, default: null })
    readonly deletedAt!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Commercial.name, default: null })
    readonly commercialId!: string | null

}

export const UserSchema = SchemaFactory.createForClass(User)

UserSchema.set('toObject', { virtuals: true })

UserSchema.virtual('privileges', {
    ref: 'Privilege',
    localField: '_id',
    foreignField: 'userId',
    justOne: true,
})

UserSchema.virtual('commercial', {
    ref: 'Commercial',
    localField: 'commercialId',
    foreignField: '_id',
    justOne: true,
})