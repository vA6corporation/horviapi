import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document, Types } from 'mongoose';
import { Beneficiary } from './beneficiary.schema';
import { Business } from './business.schema';
import { Cheque } from './cheque.schema';
import { Commercial } from './commercial.schema';
import { Deposit } from './deposit.schema';
import { Financier } from './financier.schema';
import { Mail } from './mail.schema';
import { Partnership } from './partnership.schema';
import { Payment } from './payment.schema';
import { SuretyNodeDocument } from './surety-node.schema';
import { Tender } from './tender.schema';
import { User } from './user.schema';

export type SuretyStatusUpdateDocument = SuretyStatusUpdate & Document;

@Schema({ timestamps: true })
export class SuretyStatusUpdate {

    @Prop({ type: String, required: true })
    suretyStatus!: string

}

export const SuretyStatusUpdateSchema = SchemaFactory.createForClass(SuretyStatusUpdate)


export type SuretyDocument = Surety & Document;

export enum SuretyStatus {
    WITHOUT_CHECK = '01',
    RENEW = '02',
    NOT_RENEW = '03',
    FREE = '04',
    CANCELED = '05',
    EXECUTED = '06',
    AUTO_RENEW = '07'
}

export enum SuretyPreStatus {
    INIT = '01',
    SUCCESS = '02',
    STANDBY = '03',
}

export enum DeliveryStatus {
    WITHOUT_CHECK = '01',
    COLLECT = '02',
    SHIPMENT = '03',
}

export enum PaymentStatus {
    PENDING = '01',
    PAYED = '02',
}

export enum NoRenewStatus {
    NOT_RENEW = '01',
    FREE = '02',
    APPROVED = '03',
}

export enum ProcessStatus {
    ONE = '01',
    TWO = '02',
    THREE = '03',
    FOUR = '04',
    FIVE = '05'
}

export enum SuretyType {
    MATERIAL = 'GAMF',
    COMPLIANCE = 'GFCF',
    DIRECT = 'GADF'
}

enum Color {
    VERDE = '#90EE90',
    ROJO = '#FFA7A6',
    AMARILLO = '#FFEE55',
    AZUL = '#17A2B8',
    NARANJA = '#F48F30'
}

@Schema({ timestamps: true })
export class Surety {

    readonly _id!: Types.ObjectId

    @Prop({ type: String, required: true })
    policyNumber!: string

    @Prop({ type: Number, required: true })
    price!: number

    @Prop({ type: Date, required: true })
    startAt!: any

    @Prop({ type: Date, required: true })
    endAt!: any

    @Prop({ type: Date, default: null })
    voucherAt!: any

    @Prop({ type: String, default: ProcessStatus.ONE, enum: ProcessStatus })
    processStatus!: string

    @Prop({ type: String, default: NoRenewStatus.NOT_RENEW, enum: NoRenewStatus })
    noRenewStatus!: string

    @Prop({ type: Number, default: 0 })
    processIndex!: number

    @Prop({ type: String, default: SuretyStatus.WITHOUT_CHECK, enum: SuretyStatus })
    suretyStatus!: string

    @Prop({ type: String, default: SuretyPreStatus.INIT, enum: SuretyPreStatus })
    suretyPreStatus!: string

    @Prop({ type: [SuretyStatusUpdateSchema] })
    suretyStatusUpdates!: SuretyStatusUpdateDocument[]

    @Prop({ type: String, default: SuretyStatus.WITHOUT_CHECK, enum: SuretyStatus })
    deliveryStatus!: string

    @Prop({ type: String, default: PaymentStatus.PENDING, enum: SuretyStatus })
    paymentStatus!: string

    @Prop({ type: Number, default: null })
    pagare!: number

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Financier.name, required: true })
    financierId!: any

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Beneficiary.name, required: true })
    beneficiaryId!: any

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Partnership.name, default: null })
    partnershipId!: any

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Business.name, required: true })
    businessId!: any

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    userId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Commercial.name, required: true })
    commercialId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Tender.name, required: true })
    tenderId!: string

    @Prop({ type: Number, default: null })
    guarantee!: number

    @Prop({ type: Number, default: null })
    prima!: number

    @Prop({ type: Number, default: null })
    commission!: number

    @Prop({ type: String, required: true, enum: ['PEN', 'USD'] })
    currencyCode!: string

    @Prop({ type: String, default: null })
    observations!: string

    @Prop({ type: Boolean, required: true })
    isEmition!: boolean

    @Prop({ type: Boolean, required: true })
    isPayed!: boolean

    @Prop({ type: String, enum: SuretyType, required: true })
    suretyType!: string

    createdAt!: string

    nodes!: SuretyNodeDocument[]

}

export const SuretySchema = SchemaFactory.createForClass(Surety)

SuretySchema.set('toObject', { virtuals: true })

SuretySchema.virtual('suretyStatusLabel').get(function () {
    switch (this.suretyStatus) {
        case SuretyStatus.WITHOUT_CHECK:
            return 'SIN REVISAR'
        case SuretyStatus.RENEW:
            return 'RENOVAR'
        case SuretyStatus.NOT_RENEW:
            return 'NO RENOVAR'
        case SuretyStatus.FREE:
            return 'LIBERADO'
    }
})

SuretySchema.virtual('color').get(function () {
    switch (this.suretyStatus) {
        case SuretyStatus.WITHOUT_CHECK:
            return ''
        case SuretyStatus.RENEW:
            return Color.AMARILLO
        case SuretyStatus.NOT_RENEW:
            return Color.NARANJA
        case SuretyStatus.FREE:
            return Color.VERDE
    }
})

SuretySchema.virtual('suretyTypeLabel').get(function () {
    switch (this.suretyType) {
        case SuretyType.MATERIAL:
            return 'ADELANTO DE MATERIALES'
        case SuretyType.DIRECT:
            return 'ADELANTO DIRECTO'
        case SuretyType.COMPLIANCE:
            return 'FIEL CUMPLIMIENTO'
    }
})

SuretySchema.virtual('business', {
    ref: Business.name,
    localField: 'businessId',
    foreignField: '_id',
    justOne: true,
})

SuretySchema.virtual('cheques', {
    ref: Cheque.name,
    localField: '_id',
    foreignField: 'suretyId',
    justOne: false,
})

SuretySchema.virtual('deposits', {
    ref: Deposit.name,
    localField: '_id',
    foreignField: 'suretyId',
    justOne: false,
})

SuretySchema.virtual('mails', {
    ref: Mail.name,
    localField: '_id',
    foreignField: 'suretyId',
    count: true,
})

SuretySchema.virtual('financier', {
    ref: Financier.name,
    localField: 'financierId',
    foreignField: '_id',
    justOne: true,
})

SuretySchema.virtual('tender', {
    ref: 'Tender',
    localField: 'tenderId',
    foreignField: '_id',
    justOne: true,
})

SuretySchema.virtual('beneficiary', {
    ref: Beneficiary.name,
    localField: 'beneficiaryId',
    foreignField: '_id',
    justOne: true,
})

SuretySchema.virtual('partnership', {
    ref: Partnership.name,
    localField: 'partnershipId',
    foreignField: '_id',
    justOne: true,
})

SuretySchema.virtual('commercial', {
    ref: Commercial.name,
    localField: 'commercialId',
    foreignField: '_id',
    justOne: true,
})

SuretySchema.virtual('payments', {
    ref: Payment.name,
    localField: '_id',
    foreignField: 'parentId',
    justOne: false,
})

SuretySchema.virtual('nodes', {
    ref: 'SuretyNode',
    localField: '_id',
    foreignField: 'suretyId',
    justOne: false,
})