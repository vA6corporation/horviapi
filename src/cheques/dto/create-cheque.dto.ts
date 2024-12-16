import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateChequeDto {

    @IsNotEmpty()
    readonly price!: number

    @IsNotEmpty()
    readonly paymentAt!: string

    @IsOptional()
    readonly extensionAt!: string

    @IsNotEmpty()
    readonly currencyCode!: string

}