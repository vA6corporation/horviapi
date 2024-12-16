import { Exclude, Expose, Type } from "class-transformer";
import { ReadInvestmentDto } from "src/investments/dto/read-investment.dto";
import { ReadMovablePropertyDto } from "src/movable-properties/dto/read-movable-property.dto";
import { ReadPropertyDto } from "src/properties/dto/read-property.dto";
import { ReadIncomeDto } from "./read-income.dto";

@Exclude()
export class ReadShareholderDto {

    @Expose()
    readonly _id!: string

    @Expose()
    readonly documentType!: string

    @Expose()
    readonly document!: string

    @Expose()
    readonly name!: string

    @Expose()
    readonly email!: string

    @Expose()
    readonly nationality!: string

    @Expose()
    readonly countryOrigin!: string

    @Expose()
    readonly addressResidence!: string

    @Expose()
    readonly countryResidence!: string

    @Expose()
    readonly districtResidence!: string

    @Expose()
    readonly provinceResidence!: string

    @Expose()
    readonly departmentResidence!: string

    @Expose()
    readonly professionOccupation!: string

    @Expose()
    readonly position!: string

    @Expose()
    readonly PEPInstitution!: string

    @Expose()
    readonly PEPPositionn!: string

    @Expose()
    readonly publicCompaniesCurrently!: boolean

    @Expose()
    readonly publicCompaniesLast5year!: boolean

    @Expose()
    readonly publicCompaniesInstitute!: string

    @Expose()
    readonly publicCompaniesPosition!: string

    @Expose()
    readonly publicCompaniesTime!: string

    @Expose()
    readonly maritalStatus!: string

    @Expose()
    readonly percent!: number

    @Expose()
    readonly mobileNumber!: string

    @Expose()
    readonly phoneNumber!: string

    @Expose()
    readonly annexed!: string

    @Expose()
    readonly birthDate!: string

    @Expose()
    @Type(() => ReadPropertyDto)
    readonly properties!: ReadPropertyDto[]

    @Expose()
    @Type(() => ReadMovablePropertyDto)
    readonly movableProperties!: ReadMovablePropertyDto[]

    @Expose()
    @Type(() => ReadIncomeDto)
    readonly incomes!: ReadIncomeDto[]

    @Expose()
    @Type(() => ReadInvestmentDto)
    readonly investments!: ReadInvestmentDto[]

    @Expose()
    readonly documentTypeSpouse!: string

    @Expose()
    readonly documentSpouse!: string

    @Expose()
    readonly nameSpouse!: string

    @Expose()
    readonly nationalitySpouse!: string

    @Expose()
    readonly maritalStatusSpouse!: string

    @Expose()
    readonly birthDateSpouse!: string

}