import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document, Types } from 'mongoose';
import { ReadAccessCreditDto } from 'src/businesses/dto/read-access-credit';
import { ReadAccountRotationDto } from 'src/businesses/dto/read-account-rotation';
import { ReadBoardMembersDto } from 'src/businesses/dto/read-board-members.dto';
import { ReadMainCustomersDto } from 'src/businesses/dto/read-main-customers.dto';
import { ReadMainSuppliersDto } from 'src/businesses/dto/read-main-suppliers';
import { ReadSalesMixDto } from 'src/businesses/dto/read-sales-mix';
import { ReadTrialsDto } from 'src/businesses/dto/read-trials';
import { Commercial } from './commercial.schema';
import { Experience } from './experience.schema';
import { FacilityCredit } from './facility-credit.schema';
import { Investment } from './investment.schema';
import { MovableProperty } from './movable-property.schema';
import { Partnership } from './partnership.schema';
import { Property } from './property.schema';
import { Shareholder } from './shareholder.schema';
import { Survey } from './survey.schema';

export type BusinessDocument = Business & Document;

@Schema({ timestamps: true })
export class Business {

    _id!: Types.ObjectId

    @Prop({ type: Date, default: null })
    deletedAt!: any

    @Prop({ type: String, default: '' })
    observations!: string

    @Prop({ type: Boolean, default: false })
    isJustPartnership!: boolean

    @Prop({ type: String, default: null })
    experienceObservations!: any

    @Prop({ type: String, required: true, length: 11, trim: true })
    document!: string

    @Prop({ type: String, required: false })
    electronicDeparture!: string

    @Prop({ type: String, required: false })
    registryArea!: string

    @Prop({ type: String, required: false })
    publicDeed!: string

    @Prop({ type: String, required: true })
    name!: string

    @Prop({ type: String, required: true })
    email!: string

    @Prop({ type: String, default: null })
    emailPerfilprov!: string

    @Prop({ type: String, default: '' })
    mobileNumber!: string

    @Prop({ type: String, default: '' })
    mobileNumberPerfilprov!: string

    @Prop({ type: String, default: '' })
    phoneNumber!: string

    @Prop({ type: String, default: '' })
    annexed!: string

    @Prop({ type: String, default: '' })
    turnOfBusiness!: string

    @Prop({ type: String, default: '' })
    sourcesOfIncome!: string

    @Prop({ type: String, default: '' })
    countrySource!: string

    @Prop({ type: String, default: '' })
    countryOrigin!: string

    @Prop({ type: Number, default: 0 })
    amountUse!: number

    @Prop({ type: String, default: '' })
    districtOrigin!: string

    @Prop({ type: String, default: '' })
    provinceOrigin!: string

    @Prop({ type: String, default: '' })
    departmentOrigin!: string

    @Prop({ type: String, default: '' })
    addressOrigin!: string

    @Prop({ type: String, default: '' })
    countryResidence!: string

    @Prop({ type: String, default: '' })
    districtResidence!: string

    @Prop({ type: String, default: '' })
    provinceResidence!: string

    @Prop({ type: String, default: '' })
    departmentResidence!: string

    @Prop({ type: String, default: '' })
    addressResidence!: string

    @Prop({ type: Date, default: null })
    inscriptionAt!: string

    @Prop({ type: String, default: '' })
    osceRegister!: string

    @Prop({ type: String, default: '' })
    osceHiring!: string

    @Prop({ type: String, default: '' })
    osceExpiration!: string

    @Prop({ type: String, default: '' })
    osceCertifiedDate!: string

    @Prop({ type: String, default: '' })
    osceObservation!: string

    // Representative

    @Prop({ type: String, default: '' })
    representativeDocumentType!: string

    @Prop({ type: String, default: '' })
    representativeDocument!: string

    @Prop({ type: String, default: '' })
    representativeName!: string

    @Prop({ type: String, default: '' })
    representativeNationality!: string

    @Prop({ type: String, default: '' })
    representativeMaritalStatus!: string

    @Prop({ type: String, default: '' })
    representativePropertyRegime!: string

    @Prop({ type: Date, default: null })
    representativeBirthDate!: any

    @Prop({ type: String, default: '' })
    representativePosition!: string

    @Prop({ type: Number, default: 0 })
    representativeYearsOfService!: number

    @Prop({ type: String, default: '' })
    representativeCountryOrigin!: string

    @Prop({ type: String, default: '' })
    representativeCountryResidence!: string

    @Prop({ type: String, default: '' })
    representativeDistrictResidence!: string

    @Prop({ type: String, default: '' })
    representativeProvinceResidence!: string

    @Prop({ type: String, default: '' })
    representativeDepartmentResidence!: string

    @Prop({ type: String, default: '' })
    representativeAddressResidence!: string

    @Prop({ type: String, default: '' })
    representativeMobileNumber!: string

    @Prop({ type: String, default: '' })
    representativePhoneNumber!: string

    @Prop({ type: String, default: '' })
    representativeProfessionOccupation!: string

    @Prop({ type: String, default: '' })
    representativeEmail!: string

    @Prop({ type: String, default: '' })
    representativePEPInstitution!: string

    @Prop({ type: String, default: '' })
    representativePEPPositionn!: string

    @Prop({ type: String, default: '' })
    representativeCrimeStatus!: string

    @Prop({ type: String, default: '' })
    representativeCrimeYear!: string

    @Prop({ type: String, default: '' })
    representativeCrime!: string

    @Prop({ type: Number, default: 0 })
    representativeSalary!: number

    @Prop({ type: String, default: '' })
    representativeLivingPlacePay!: string

    @Prop({ type: Number, default: 0 })
    representativeLivingPlacePrice!: number

    @Prop({ type: String, default: '' })
    representativeGender!: string

    @Prop({ type: String, default: '' })
    representativeStudies!: string

    @Prop({ type: String, default: '' })
    representativeLivingPlace!: string

    // Representative spouse

    @Prop({ type: String, default: '' })
    representativeSpouseDocumentType!: string

    @Prop({ type: String, default: '' })
    representativeSpouseDocument!: string

    @Prop({ type: String, default: '' })
    representativeSpouseName!: string

    @Prop({ type: String, default: '' })
    representativeSpouseNationality!: string

    @Prop({ type: String, default: '' })
    representativeSpouseMaritalStatus!: string

    @Prop({ type: String, default: '' })
    representativeSpousePropertyRegime!: string

    @Prop({ type: Date, default: null })
    representativeSpouseBirthDate!: string

    @Prop({ type: String, default: '' })
    representativeSpouseProfessionOccupation!: string

    @Prop({ type: String, default: '' })
    representativeSpouseGender!: string

    @Prop({ type: [mongoose.Schema.Types.ObjectId], default: [] })
    linkedBusinessesIds!: string[]

    @Prop({ type: [], default: [] })
    boardMembers!: ReadBoardMembersDto[]

    @Prop({ type: [], default: [] })
    salesMix!: ReadSalesMixDto[]

    @Prop({ type: [], default: [] })
    mainSuppliers!: ReadMainSuppliersDto[]

    @Prop({ type: [], default: [] })
    mainCustomers!: ReadMainCustomersDto[]

    @Prop({ type: [], default: [] })
    accessCredit!: ReadAccessCreditDto[]

    @Prop({ type: [], default: [] })
    accountRotation!: ReadAccountRotationDto[]

    @Prop({ type: [], default: [] })
    trials!: ReadTrialsDto[]

    @Prop({ type: String, default: '' })
    urlSignature!: string

    @Prop({ type: [mongoose.Schema.Types.ObjectId], default: [] })
    shareholderIds!: string[]

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    userId!: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    commercialId!: string

}

export const BusinessSchema = SchemaFactory.createForClass(Business)

BusinessSchema.set('toObject', { virtuals: true })

BusinessSchema.virtual('partnership', {
    ref: Partnership.name,
    localField: 'partnershipId',
    foreignField: '_id',
    justOne: true,
})

BusinessSchema.virtual('lastSurvey', {
    ref: Survey.name,
    localField: '_id',
    foreignField: 'businessId',
    justOne: true,
    options: { sort: '-createdAt' }
})

BusinessSchema.virtual('linkedBusinesses', {
    ref: Business.name,
    localField: 'linkedBusinessesIds',
    foreignField: '_id',
    justOne: false,
})

BusinessSchema.virtual('shareholders', {
    ref: Shareholder.name,
    localField: 'shareholderIds',
    foreignField: '_id',
    justOne: false,
})

BusinessSchema.virtual('properties', {
    ref: Property.name,
    localField: '_id',
    foreignField: 'businessId',
    justOne: false,
})

BusinessSchema.virtual('movableProperties', {
    ref: MovableProperty.name,
    localField: '_id',
    foreignField: 'businessId',
    justOne: false,
})

BusinessSchema.virtual('investments', {
    ref: Investment.name,
    localField: '_id',
    foreignField: 'businessId',
    justOne: false,
})

BusinessSchema.virtual('experiences', {
    ref: Experience.name,
    localField: '_id',
    foreignField: 'businessId',
    justOne: false,
})

BusinessSchema.virtual('facilityCredits', {
    ref: FacilityCredit.name,
    localField: '_id',
    foreignField: 'businessId',
    justOne: false,
})

BusinessSchema.virtual('commercial', {
    ref: Commercial.name,
    localField: 'commercialId',
    foreignField: '_id',
    justOne: true,
})