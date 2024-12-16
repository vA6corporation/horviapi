import { Exclude, Expose, Type } from 'class-transformer';
import { ReadCommercialDto } from 'src/commercials/dto/read-commercial.dto';
import { ReadInvestmentDto } from 'src/investments/dto/read-investment.dto';
import { ReadMovablePropertyDto } from 'src/movable-properties/dto/read-movable-property.dto';
import { ReadPropertyDto } from 'src/properties/dto/read-property.dto';
import { ReadShareholderDto } from 'src/shareholders/dto/read-shareholder.dto';
import { ReadGuaranteeDto } from 'src/templates/dto/read-guarantee.dto';
import { ReadAccessCreditDto } from './read-access-credit';
import { ReadAccountRotationDto } from './read-account-rotation';
import { ReadBoardMembersDto } from './read-board-members.dto';
import { ReadExperienceDto } from './read-experience.dto';
import { ReadFacilityCreditDto } from './read-facility-credit.dto';
import { ReadMainCustomersDto } from './read-main-customers.dto';
import { ReadMainSuppliersDto } from './read-main-suppliers';
import { ReadSalesMixDto } from './read-sales-mix';

@Exclude()
export class ReadBusinessDto {

    @Expose()
    @Type(() => String)
    readonly _id!: string

    @Expose()
    readonly commercialId!: string

    @Expose()
    @Type(() => ReadCommercialDto)
    readonly commercial!: ReadCommercialDto

    @Expose()
    readonly isJustPartnership!: boolean

    @Expose()
    readonly observations!: string

    @Expose()
    readonly urlSignature!: string

    @Expose()
    readonly document!: string

    @Expose()
    readonly electronicDeparture!: string

    @Expose()
    readonly registryArea!: string

    @Expose()
    readonly publicDeed!: string

    @Expose()
    readonly name!: string

    @Expose()
    readonly email!: string

    @Expose()
    readonly mobileNumber!: string

    @Expose()
    readonly mobileNumberPerfilprov!: string

    @Expose()
    readonly phoneNumber!: string

    @Expose()
    readonly annexed!: string

    @Expose()
    readonly turnOfBusiness!: string

    @Expose()
    readonly sourcesOfIncome!: string

    @Expose()
    readonly countrySource!: string

    @Expose()
    readonly countryOrigin!: string

    @Expose()
    readonly amountUse!: number

    @Expose()
    readonly districtOrigin!: string

    @Expose()
    readonly provinceOrigin!: string

    @Expose()
    readonly departmentOrigin!: string

    @Expose()
    readonly addressOrigin!: string

    @Expose()
    readonly countryResidence!: string

    @Expose()
    readonly districtResidence!: string

    @Expose()
    readonly provinceResidence!: string

    @Expose()
    readonly departmentResidence!: string

    @Expose()
    readonly addressResidence!: string

    @Expose()
    readonly inscriptionAt!: string

    @Expose()
    readonly osceRegister!: string

    @Expose()
    readonly osceHiring!: string

    @Expose()
    readonly osceExpiration!: string

    @Expose()
    readonly osceCertifiedDate!: string

    @Expose()
    readonly osceObservation!: string

    @Expose()
    @Type(() => ReadSalesMixDto)
    salesMix!: ReadSalesMixDto[]

    @Expose()
    @Type(() => ReadMainSuppliersDto)
    mainSuppliers!: ReadMainSuppliersDto[]

    @Expose()
    @Type(() => ReadMainCustomersDto)
    mainCustomers!: ReadMainCustomersDto[]

    @Expose()
    @Type(() => ReadAccessCreditDto)
    accessCredit!: ReadAccessCreditDto[]

    @Expose()
    @Type(() => ReadAccountRotationDto)
    accountRotation!: ReadAccountRotationDto[]

    @Expose()
    @Type(() => ReadBoardMembersDto)
    readonly boardMembers!: ReadBoardMembersDto[]

    @Expose()
    @Type(() => ReadBusinessDto)
    readonly linkedBusinesses!: ReadBusinessDto[]

    @Expose()
    @Type(() => ReadShareholderDto)
    readonly shareholders!: ReadShareholderDto[]

    @Expose()
    @Type(() => ReadPropertyDto)
    readonly properties!: ReadPropertyDto[]

    @Expose()
    @Type(() => ReadMovablePropertyDto)
    readonly movableProperties!: ReadMovablePropertyDto[]

    @Expose()
    @Type(() => ReadInvestmentDto)
    readonly investments!: ReadInvestmentDto[]

    @Expose()
    @Type(() => ReadExperienceDto)
    readonly experiences!: ReadExperienceDto[]

    @Expose()
    @Type(() => ReadGuaranteeDto)
    readonly guaranties!: ReadGuaranteeDto[]

    @Expose()
    @Type(() => ReadFacilityCreditDto)
    readonly facilityCredits!: ReadFacilityCreditDto[]

    @Expose()
    readonly UIF!: Boolean

    @Expose()
    readonly hasComplianceOfficer!: Boolean

    @Expose()
    readonly managementManualLAFT!: Boolean

    @Expose()
    readonly codeEthicsConduct!: Boolean

    @Expose()
    readonly carryReviewClients!: Boolean

    @Expose()
    readonly madeMakeInvestments!: Boolean

    @Expose()
    readonly companyEverBeenInvestigated!: Boolean

    // Representative
    @Expose()
    readonly representativeDocumentType!: string

    @Expose()
    readonly representativeDocument!: string

    @Expose()
    readonly representativeName!: string

    @Expose()
    readonly representativeNationality!: string

    @Expose()
    readonly representativeMaritalStatus!: string

    @Expose()
    readonly representativePropertyRegime!: string

    @Expose()
    readonly representativeBirthDate!: string

    @Expose()
    readonly representativePosition!: string

    @Expose()
    readonly representativeYearsOfService!: number

    @Expose()
    readonly representativeCountryOrigin!: string

    @Expose()
    readonly representativeCountryResidence!: string

    @Expose()
    readonly representativeDistrictResidence!: string

    @Expose()
    readonly representativeProvinceResidence!: string

    @Expose()
    readonly representativeDepartmentResidence!: string

    @Expose()
    readonly representativeAddressResidence!: string

    @Expose()
    readonly representativeMobileNumber!: string

    @Expose()
    readonly representativePhoneNumber!: string

    @Expose()
    readonly representativeProfessionOccupation!: string

    @Expose()
    readonly representativeEmail!: string

    @Expose()
    readonly representativePEPInstitution!: string

    @Expose()
    readonly representativePEPPositionn!: string

    @Expose()
    readonly representativeCrimeStatus!: string

    @Expose()
    readonly representativeCrimeYear!: string

    @Expose()
    readonly representativeCrime!: string

    @Expose()
    readonly representativeSalary!: number

    @Expose()
    readonly representativeLivingPlacePay!: string

    @Expose()
    readonly representativeLivingPlacePrice!: number

    @Expose()
    readonly representativeGender!: string

    @Expose()
    readonly representativeStudies!: string

    @Expose()
    readonly representativeLivingPlace!: string

    @Expose()
    readonly representativeSpouseDocumentType!: string

    @Expose()
    readonly representativeSpouseDocument!: string

    @Expose()
    readonly representativeSpouseName!: string

    @Expose()
    readonly representativeSpouseNationality!: string

    @Expose()
    readonly representativeSpouseMaritalStatus!: string

    @Expose()
    readonly representativeSpousePropertyRegime!: string

    @Expose()
    readonly representativeSpouseBirthDate!: string

    @Expose()
    readonly representativeSpouseProfessionOccupation!: string

    @Expose()
    readonly representativeSpouseGender!: string

}
