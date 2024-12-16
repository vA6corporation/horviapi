import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document, Types } from 'mongoose';
import { Beneficiary } from './beneficiary.schema';
import { Business } from './business.schema';
import { Commercial } from './commercial.schema';
import { Insurance, InsuranceDocument } from './insurance.schema';
import { Partnership } from './partnership.schema';
import { Payment, PaymentDocument } from './payment.schema';
import { PercentCompletion } from './percent-completion.schema';
import { User } from './user.schema';
import { TenderNodeDocument } from './tender-node.schema';

export type TenderDocument = Tender & Document;

@Schema({ timestamps: true })
export class Tender extends Document {

    _id!: Types.ObjectId

    @Prop({ type: Number, default: null })
    commission!: any

    @Prop({ type: String, required: true })
    objectDescription!: string

    @Prop({ type: Number, required: true })
    awardedAmount!: number

    @Prop({ type: Date, required: true })
    emitionAt!: any

    @Prop({ type: Date, default: null })
    startAt!: any

    @Prop({ type: Number, default: null })
    dayLimit!: number

    // 01 -> REDACCION
    // 02 -> LEGALIZACION
    // 03 -> CONFORMIDAD
    // 04 -> CONSTITUIDO
    @Prop({ type: String, default: '01', enum: ['01', '02', '03', '04'], required: true })
    processStatusCode!: string

    // - EJECUCION
    // - POR TERMINAR
    // - PARALIZADA
    // - EN ARBITRAJE
    // - ANULADA
    // - FINALIZADA
    // - AMORTIZADA
    // - FIANZA EJECUTADA
    @Prop({ type: String, default: '01', enum: ['01', '02', '03', '04', '05', '06', '07', '08'], required: true })
    constructionCode!: string

    @Prop({ type: String, required: true })
    code!: string

    @Prop({ type: String, default: null })
    observations!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Partnership.name, default: null })
    partnershipId!: any

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Business.name, required: true })
    businessId!: any

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Beneficiary.name, required: true })
    beneficiaryId!: any

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Commercial.name, required: true })
    commercialId!: any

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    userId!: string

    processIsPaid!: Function

    payments!: PaymentDocument[] | undefined

    insurances!: InsuranceDocument[] | null

    nodes!: TenderNodeDocument[]

}

export const TenderSchema = SchemaFactory.createForClass(Tender)

TenderSchema.set('toObject', { virtuals: true })

TenderSchema.virtual('TenderCodeType').get(function () {
    switch (this.constructionCode) {
        case '01':
            return 'EJECUCION'
        case '02':
            return 'POR TERMINAR'
        case '03':
            return 'PARALIZADA'
        case '04':
            return 'EN ARBITRAJE'
        case '05':
            return 'ANULADA'
        case '06':
            return 'FINALIZADA'
        case '07':
            return 'AMORTIZADA'
        case '08':
            return 'FIANZA EJECUTADA'
    }
})

TenderSchema.virtual('processStatusCodeType').get(function () {
    switch (this.processStatusCode) {
        case '01':
            return 'REDACCION'
        case '02':
            return 'LEGALIZACION'
        case '03':
            return 'CONFORMIDAD'
        case '04':
            return 'CONSTITUIDO'
    }
})

TenderSchema.virtual('emitionMaterial', {
    ref: 'Surety',
    localField: '_id',
    foreignField: 'tenderId',
    justOne: true,
    match: { isEmition: true }
})

TenderSchema.virtual('nodes', {
    ref: 'TenderNode',
    localField: '_id',
    foreignField: 'tenderId',
    justOne: false,
})

TenderSchema.virtual('emitionCompliance', {
    ref: 'Compliance',
    localField: '_id',
    foreignField: 'tenderId',
    justOne: true,
    match: { isEmition: true }
})

TenderSchema.virtual('emitionDirect', {
    ref: 'Surety',
    localField: '_id',
    foreignField: 'tenderId',
    justOne: true,
    match: { isEmition: true }
})

TenderSchema.virtual('commercial', {
    ref: Commercial.name,
    localField: 'commercialId',
    foreignField: '_id',
    justOne: true,
})

TenderSchema.virtual('percentCompletion', {
    ref: PercentCompletion.name,
    localField: '_id',
    foreignField: 'tenderId',
    justOne: true,
})

TenderSchema.virtual('partnership', {
    ref: Partnership.name,
    localField: 'partnershipId',
    foreignField: '_id',
    justOne: true,
})

TenderSchema.virtual('business', {
    ref: Business.name,
    localField: 'businessId',
    foreignField: '_id',
    justOne: true,
})

TenderSchema.virtual('beneficiary', {
    ref: Beneficiary.name,
    localField: 'beneficiaryId',
    foreignField: '_id',
    justOne: true,
})

TenderSchema.virtual('payments', {
    ref: Payment.name,
    localField: '_id',
    foreignField: 'parentId',
    justOne: false,
})

TenderSchema.virtual('insurances', {
    ref: Insurance.name,
    localField: '_id',
    foreignField: 'tenderId',
    justOne: false,
})

TenderSchema.virtual('sureties', {
    ref: 'Surety',
    localField: '_id',
    foreignField: 'tenderId',
    justOne: false,
})