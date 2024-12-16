import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';
import { Seace } from './seace.schema';

export enum SeaceFileType {
    FICHA_RUC = '01',
    DNI_REPRESENTANTE = '02',
    VIGENCIA_PODER = '03',
    DECLARACION_JURADA = '04',
    ESTADO_FINANCIERO = '05',
    EXPERIENCIA = '06',
    BUENA_PRO = '07'
}

export type SeaceNodeDocument = SeaceNode & Document;

@Schema({ timestamps: true })
export class SeaceNode {

    _id!: Types.ObjectId

    @Prop({ type: String, required: true })
    readonly name!: string

    @Prop({ type: String, required: true })
    readonly mimeType!: string

    @Prop({ type: String, required: true, enum: SeaceFileType })
    readonly fileType!: string

    @Prop({ type: Number, required: true })
    readonly size!: number

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Seace.name, required: true })
    readonly seaceId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    readonly userId!: string

}

export const SeaceNodeSchema = SchemaFactory.createForClass(SeaceNode)

SeaceNodeSchema.set('toObject', { virtuals: true })