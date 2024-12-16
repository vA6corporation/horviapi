import { IsNotEmpty, IsOptional, Validate } from 'class-validator';
import { ValidateDocument } from 'src/validate-document';
import { ReadAccessCreditDto } from './read-access-credit';
import { ReadAccountRotationDto } from './read-account-rotation';
import { ReadBoardMembersDto } from './read-board-members.dto';
import { ReadMainCustomersDto } from './read-main-customers.dto';
import { ReadMainSuppliersDto } from './read-main-suppliers';
import { ReadSalesMixDto } from './read-sales-mix';
import { ReadTrialsDto } from './read-trials';

export class UpdateBusinessDto {

    @IsNotEmpty()
    readonly commercialId!: string

    @IsNotEmpty()
    readonly isJustPartnership!: boolean

    @IsOptional()
    readonly observations!: string

    @Validate(ValidateDocument, ['documentType'])
    readonly document!: string

    @IsOptional()
    readonly electronicDeparture!: string

    @IsOptional()
    readonly registryArea!: string

    @IsOptional()
    readonly publicDeed!: string

    @IsNotEmpty()
    readonly name!: string

    @IsNotEmpty()
    readonly email!: string

    @IsOptional()
    readonly mobileNumber!: string

    @IsOptional()
    readonly phoneNumber!: string

    @IsOptional()
    readonly annexed!: string

    @IsOptional()
    readonly turnOfBusiness!: string

    @IsOptional()
    readonly sourcesOfIncome!: string

    @IsOptional()
    readonly countrySource!: string

    @IsOptional()
    readonly amountUse!: number

    @IsOptional()
    readonly countryOrigin!: string

    @IsOptional()
    readonly districtOrigin!: string

    @IsOptional()
    readonly provinceOrigin!: string

    @IsOptional()
    readonly departmentOrigin!: string

    @IsOptional()
    readonly addressOrigin!: string

    @IsOptional()
    readonly countryResidence!: string

    @IsOptional()
    readonly districtResidence!: string

    @IsOptional()
    readonly provinceResidence!: string

    @IsOptional()
    readonly departmentResidence!: string

    @IsOptional()
    readonly addressResidence!: string

    @IsOptional()
    readonly inscriptionAt!: string

    @IsOptional()
    readonly UIF!: Boolean

    @IsOptional()
    readonly hasComplianceOfficer!: Boolean

    @IsOptional()
    readonly managementManualLAFT!: Boolean

    @IsOptional()
    readonly codeEthicsConduct!: Boolean

    @IsOptional()
    readonly carryReviewClients!: Boolean

    @IsOptional()
    readonly madeMakeInvestments!: Boolean

    @IsOptional()
    readonly companyEverBeenInvestigated!: Boolean

    @IsOptional()
    readonly osceRegister!: string

    @IsOptional()
    readonly osceHiring!: string

    @IsOptional()
    readonly osceExpiration!: string

    @IsOptional()
    readonly osceCertifiedDate!: string

    @IsOptional()
    readonly osceObservation!: string


    // Representative

    @IsOptional()
    readonly representativeDocumentType!: string

    @IsOptional()
    readonly representativeDocument!: string

    @IsOptional()
    readonly representativeName!: string

    @IsOptional()
    readonly representativeNationality!: string

    @IsOptional()
    readonly representativeMariaStatus!: string

    @IsOptional()
    readonly representativePropertyRegime!: string

    @IsOptional()
    readonly representativeBirthDate!: string

    @IsOptional()
    readonly representativePosition!: string

    @IsOptional()
    readonly representativeYearsOfService!: number

    @IsOptional()
    readonly representativeCountryOrigin!: string

    @IsOptional()
    readonly representativeCountryResidence!: string

    @IsOptional()
    readonly representativeDistrictResidence!: string

    @IsOptional()
    readonly representativeProvinceResidence!: string

    @IsOptional()
    readonly representativeDepartmentResidence!: string

    @IsOptional()
    readonly representativeAddressResidence!: string

    @IsOptional()
    readonly representativeMobileNumber!: string

    @IsOptional()
    readonly representativePhoneNumber!: string

    @IsOptional()
    readonly representativeProfessionOccupation!: string

    @IsOptional()
    readonly representativeEmail!: string

    @IsOptional()
    readonly representativePEPInstitution!: string

    @IsOptional()
    readonly representativePEPPositionn!: string

    @IsOptional()
    readonly representativeCrimeStatus!: string

    @IsOptional()
    readonly representativeCrimeYear!: string

    @IsOptional()
    readonly representativeCrime!: string

    @IsOptional()
    readonly representativeSalary!: number

    @IsOptional()
    readonly representativeLivingPlacePay!: string

    @IsOptional()
    readonly representativeLivingPlacePrice!: number

    @IsOptional()
    readonly representativeGender!: string

    @IsOptional()
    readonly representativeStudies!: string

    @IsOptional()
    readonly representativeLivingPlace!: string


    // Representative spouse

    @IsOptional()
    readonly representativeSpouseDocumentType!: string

    @IsOptional()
    readonly representativeSpouseDocument!: string

    @IsOptional()
    readonly representativeSpouseName!: string

    @IsOptional()
    readonly representativeSpouseNationality!: string

    @IsOptional()
    readonly representativeSpouseMaritalStatus!: string

    @IsOptional()
    readonly representativeSpousePropertyRegime!: string

    @IsOptional()
    readonly representativeSpouseBirthDate!: string

    @IsOptional()
    readonly representativeSpouseProfessionOccupation!: string

    @IsOptional()
    readonly representativeSpouseGender!: string

    @IsOptional()
    readonly boardMembers!: ReadBoardMembersDto[]

    @IsOptional()
    readonly salesMix!: ReadSalesMixDto[]

    @IsOptional()
    readonly mainSuppliers!: ReadMainSuppliersDto[]

    @IsOptional()
    readonly mainCustomers!: ReadMainCustomersDto[]

    @IsOptional()
    readonly accessCredit!: ReadAccessCreditDto[]

    @IsOptional()
    readonly accountRotation!: ReadAccountRotationDto[]

    @IsOptional()
    readonly trials!: ReadTrialsDto[]

    @IsOptional()
    readonly deletedAt!: string | null

}
