import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document, Types } from 'mongoose';
import { Commercial } from './commercial.schema';
import { Customer } from './customer.schema';
import { Financier } from './financier.schema';
import { InsuranceGroup } from './insurance-group.schema';
import { PaymentDocument } from './payment.schema';
import { User } from './user.schema';

export enum InsuranceType {
    SCTR = 'SCTR',
    SOAT = 'SOAT',
    VIDALEY = 'VIDALEY',
    POLIZACAR = 'POLIZACAR',
    POLIZATREC = 'POLIZATREC',
    POLIZAEAR = 'POLIZAEAR',
    RCIVIL = 'RCIVIL',
    VEHICULAR = 'VEHICULAR',
    VIDA = 'VIDA',
    EPS = 'EPS',
    SALUD = 'SALUD',
    ACCIDENTES = 'ACCIDENTES',
    FOLA = 'FOLA',
    VIAJES = 'VIAJES',
    PEMPRESARIAL = 'PEMPRESARIAL',
    MULTIRRIESGOS = 'MULTIRRIESGOS'
}

export type InsuranceDocument = Insurance & Document;

@Schema({ timestamps: true })
export class Insurance {

    _id!: Types.ObjectId

    @Prop({ type: String, required: true })
    policyNumber!: string

    @Prop({ type: Date, required: true })
    expirationAt!: any

    @Prop({ type: Date, required: true })
    emitionAt!: string

    @Prop({ type: Number, required: true })
    prima!: number

    @Prop({ type: Number, required: true })
    commission!: number

    @Prop({ type: String, enum: InsuranceType, required: true })
    insuranceType!: string

    @Prop({ type: String, default: '' })
    status!: string

    @Prop({ type: String, required: true, enum: ['PEN', 'USD'] })
    currencyCode!: string

    @Prop({ type: Boolean, required: true })
    isEmition!: boolean

    @Prop({ type: String, default: '' })
    observations!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Tender', default: null })
    tenderId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Customer.name, required: true })
    customerId!: any

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Financier.name, required: true })
    financierId!: any

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Commercial.name, required: true })
    commercialId!: Types.ObjectId

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    userId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: InsuranceGroup.name, required: true })
    insuranceGroupId!: string

    payments!: PaymentDocument[] | null

}

export const InsuranceSchema = SchemaFactory.createForClass(Insurance)

InsuranceSchema.set('toObject', { virtuals: true })

InsuranceSchema.virtual('customer', {
    ref: Customer.name,
    localField: 'customerId',
    foreignField: '_id',
    justOne: true,
})

InsuranceSchema.virtual('financier', {
    ref: Financier.name,
    localField: 'financierId',
    foreignField: '_id',
    justOne: true,
})

InsuranceSchema.virtual('tender', {
    ref: 'Tender',
    localField: 'tenderId',
    foreignField: '_id',
    justOne: true,
})

InsuranceSchema.virtual('commercial', {
    ref: Commercial.name,
    localField: 'commercialId',
    foreignField: '_id',
    justOne: true,
})