import { IsNotEmpty, IsOptional } from 'class-validator'
import { SuretyPreStatus, SuretyStatus } from 'src/schemas/surety.schema'

export class UpdateSuretyDto {

    @IsOptional()
    readonly suretyStatus!: SuretyStatus

    @IsOptional()
    readonly suretyPreStatus!: SuretyPreStatus

    @IsOptional()
    readonly deliveryStatus!: string

    @IsOptional()
    readonly paymentStatus!: string

    @IsOptional()
    readonly noRenewStatus!: string

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
    readonly isEmition!: string

    @IsNotEmpty()
    readonly isPayed!: boolean

    @IsOptional()
    readonly observations!: boolean

    @IsNotEmpty()
    readonly tenderId!: string

    @IsOptional()
    readonly color!: string

}