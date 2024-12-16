import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from './user.schema';
import { Property } from './property.schema';
import { MovableProperty } from './movable-property.schema';
import * as mongoose from 'mongoose';
import { Income } from './income.schema';
import { Investment } from './investment.schema';

export type ShareholderDocument = Shareholder & Document;

@Schema({ timestamps: true })
export class Shareholder {

    _id!: Types.ObjectId

    @Prop({ type: String, required: true, enum: ['DNI', 'RUC', 'CE'] })
    documentType!: string

    @Prop({ type: String, required: true })
    document!: string

    @Prop({ type: String, required: true, uppercase: true })
    name!: string

    @Prop({ type: String })
    email!: string

    @Prop({ type: String, required: true })
    nationality!: string

    @Prop({ type: String, default: null })
    countryOrigin!: string

    @Prop({ type: String })
    addressResidence!: string

    @Prop({ type: String })
    countryResidence!: string

    @Prop({ type: String })
    districtResidence!: string

    @Prop({ type: String })
    provinceResidence!: string

    @Prop({ type: String })
    departmentResidence!: string

    @Prop({ type: String })
    residence!: string

    @Prop({ type: String, default: '' })
    professionOccupation!: string

    @Prop({ type: String, default: '' })
    position!: string

    @Prop({ type: String, default: '' })
    PEPInstitution!: string

    @Prop({ type: String, default: '' })
    PEPPositionn!: string

    @Prop({ type: Boolean, default: false })
    isPublicCompaniesCurrently!: boolean

    @Prop({ type: Boolean, default: false })
    isPublicCompaniesLastFiveYear!: boolean

    @Prop({ type: String, default: '' })
    publicCompaniesInstitute!: string

    @Prop({ type: String, default: '' })
    publicCompaniesPosition!: string

    @Prop({ type: String, default: '' })
    publicCompaniesTime!: string

    @Prop({ type: String, required: true })
    maritalStatus!: string

    @Prop({ type: Number, required: true })
    percent!: number

    @Prop({ type: String, default: '' })
    mobileNumber!: string

    @Prop({ type: String, default: '' })
    phoneNumber!: string

    @Prop({ type: String, default: '' })
    annexed!: string

    @Prop({ type: Date, default: null })
    birthDate!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    userId!: string

    @Prop({ type: String })
    documentTypeSpouse!: string

    @Prop({ type: String })
    documentSpouse!: string

    @Prop({ type: String })
    nameSpouse!: string

    @Prop({ type: String })
    nationalitySpouse!: string

    @Prop({ type: String })
    maritalStatusSpouse!: string

    @Prop({ type: Date })
    birthDateSpouse!: string
}

export const ShareholderSchema = SchemaFactory.createForClass(Shareholder)

ShareholderSchema.set('toObject', { virtuals: true })

ShareholderSchema.virtual('properties', {
    ref: Property.name,
    localField: '_id',
    foreignField: 'businessId',
    justOne: false,
})

ShareholderSchema.virtual('movableProperties', {
    ref: MovableProperty.name,
    localField: '_id',
    foreignField: 'businessId',
    justOne: false,
})

ShareholderSchema.virtual('incomes', {
    ref: Income.name,
    localField: '_id',
    foreignField: 'businessId',
    justOne: false,
})

ShareholderSchema.virtual('investments', {
    ref: Investment.name,
    localField: '_id',
    foreignField: 'businessId',
    justOne: false,
})
