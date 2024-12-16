import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateChequeDto {

    @IsNotEmpty()
    readonly price!: number

    @IsNotEmpty()
    readonly paymentAt!: string

    @IsOptional()
    readonly extensionAt!: string

    @IsNotEmpty()
    readonly suretyId!: string

    @IsNotEmpty()
    readonly currencyCode!: string

    @IsOptional()
    readonly isPaid!: boolean

}
