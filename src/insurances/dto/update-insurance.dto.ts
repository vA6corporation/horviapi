import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateInsuranceDto {

    @IsNotEmpty()
    readonly policyNumber!: string

    @IsNotEmpty()
    readonly expirationAt!: string

    @IsNotEmpty()
    readonly emitionAt!: string

    @IsNotEmpty()
    readonly prima!: number

    @IsNotEmpty()
    readonly commission!: number

    @IsNotEmpty()
    readonly insuranceType!: string

    @IsOptional()
    readonly tenderId!: string

    @IsOptional()
    readonly observations!: string

    @IsNotEmpty()
    readonly customerId!: string

    @IsNotEmpty()
    readonly financierId!: string

    @IsNotEmpty()
    readonly commercialId!: string

}