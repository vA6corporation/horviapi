import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export enum OperationStatus {
    SIN_ESTABLECER = '01',
    APROBADO = '02',
    DENEGADO = '03',
    PERDIDO = '04'
}

export type OperationDocument = Operation & Document;

@Schema({ timestamps: true })
export class Operation extends Document {

    _id!: string

    @Prop({ type: String, default: '01' })
    operationStatus!: string

    @Prop({ type: Boolean, default: false })
    secrex!: boolean

    @Prop({ type: Boolean, default: false })
    crecer!: boolean

    @Prop({ type: Boolean, default: false })
    mapfre!: boolean

    @Prop({ type: Boolean, default: false })
    insur!: boolean

    @Prop({ type: Boolean, default: false })
    avla!: boolean

    @Prop({ type: String, default: '' })
    observations!: boolean

    @Prop({ type: Date, default: null })
    sendInsuranceAt!: any

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    seaceId!: string

}

export const OperationSchema = SchemaFactory.createForClass(Operation)

OperationSchema.set('toObject', { virtuals: true })

OperationSchema.virtual('seace', {
    ref: 'Seace',
    localField: 'seaceId',
    foreignField: '_id',
    justOne: true,
})

OperationSchema.virtual('operationStatusLabel').get(function() {
    switch (this.operationStatus) {
        case OperationStatus.SIN_ESTABLECER:
            return 'SIN ESTABLECER'
        case OperationStatus.APROBADO:
            return 'APROBADO'
        case OperationStatus.DENEGADO:
            return 'DENEGADO'
        case OperationStatus.PERDIDO:
            return 'PERDIDO'
    }
})