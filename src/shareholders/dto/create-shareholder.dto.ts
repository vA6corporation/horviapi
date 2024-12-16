import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateShareholderDto {

    @IsNotEmpty()
    readonly documentType!: string

    @IsNotEmpty()
    readonly document!: string

    @IsNotEmpty()
    readonly name!: string

    @IsOptional()
    readonly email!: string

    @IsOptional()
    readonly nationality!: string

    @IsOptional()
    readonly countryOrigin!: string

    @IsOptional()
    readonly addressResidence!: string

    @IsOptional()
    readonly countryResidence!: string

    @IsOptional()
    readonly districtResidence!: string

    @IsOptional()
    readonly provinceResidence!: string

    @IsOptional()
    readonly departmentResidence!: string

    @IsOptional()
    readonly residence!: string

    @IsOptional()
    readonly professionOccupation!: string

    @IsOptional()
    readonly position!: string

    @IsOptional()
    readonly PEPInstitution!: string

    @IsOptional()
    readonly PEPPositionn!: string

    @IsOptional()
    readonly isPublicCompaniesCurrently!: boolean

    @IsOptional()
    readonly isPublicCompaniesLastFiveYear!: boolean

    @IsOptional()
    readonly publicCompaniesInstitute!: string

    @IsOptional()
    readonly publicCompaniesPosition!: string

    @IsOptional()
    readonly publicCompaniesTime!: string

    @IsOptional()
    readonly maritalStatus!: string

    @IsNotEmpty()
    readonly percent!: number

    @IsOptional()
    readonly mobileNumber!: string

    @IsOptional()
    readonly phoneNumber!: string

    @IsOptional()
    readonly annexed!: string

    @IsOptional()
    readonly birthDate!: string

    @IsOptional()
    readonly documentTypeSpouse!: string

    @IsOptional()
    readonly documentSpouse!: string

    @IsOptional()
    readonly nameSpouse!: string

    @IsOptional()
    readonly nationalitySpouse!: string

    @IsOptional()
    readonly maritalStatusSpouse!: string

    @IsOptional()
    readonly birthDateSpouse!: string
    
}
