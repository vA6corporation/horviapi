import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document, Types } from 'mongoose';
import { Financier } from './financier.schema';

export enum OperationSuretyType {
    MATERIAL = 'GAMF',
    COMPLIANCE = 'GFCF',
    DIRECT = 'GADF'
}

export type OperationSuretyDocument = OperationSurety & Document

@Schema({ timestamps: true })
export class OperationSurety {

    _id!: Types.ObjectId

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    financierId!: any

    @Prop({ type: Date, required: true })
    emitionAt!: any

    @Prop({ type: String, default: '' })
    observations!: any

    @Prop({ type: Date, default: null })
    deliveredAt!: string

    @Prop({ type: String, enum: OperationSuretyType, required: true })
    operationSuretyType!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    operationId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    userId!: string

}

export const OperationSuretySchema = SchemaFactory.createForClass(OperationSurety)

OperationSuretySchema.set('toObject', { virtuals: true })

OperationSuretySchema.virtual('financier', {
    ref: Financier.name,
    localField: 'financierId',
    foreignField: '_id',
    justOne: true,
})

OperationSuretySchema.virtual('operationSuretyTypeLabel').get(function () {
    switch (this.operationSuretyType) {
        case OperationSuretyType.MATERIAL:
            return 'ADELANTO DE MATERIALES'
        case OperationSuretyType.DIRECT:
            return 'ADELANTO DIRECTO'
        case OperationSuretyType.COMPLIANCE:
            return 'FIEL CUMPLIMIENTO'
    }
})