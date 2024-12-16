import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateSuretyDto {

    @IsNotEmpty()
    readonly price!: number

    @IsNotEmpty()
    readonly policyNumber!: string

    @IsNotEmpty()
    readonly startAt!: string

    @IsNotEmpty()
    readonly endAt!: string

    @IsOptional()
    readonly prima!: number

    @IsOptional()
    readonly pagare!: number

    @IsOptional()
    readonly guarantee!: number

    @IsNotEmpty()
    readonly businessId!: string

    @IsNotEmpty()
    readonly financierId!: string

    @IsNotEmpty()
    readonly beneficiaryId!: string

    @IsOptional()
    readonly partnershipId!: string

    @IsNotEmpty()
    readonly commercialId!: string

    @IsNotEmpty()
    readonly currencyCode!: string

    @IsNotEmpty()
    readonly isEmition!: boolean

    @IsNotEmpty()
    readonly isPayed!: boolean

    @IsOptional()
    readonly observations!: string

    @IsNotEmpty()
    readonly tenderId!: string

}