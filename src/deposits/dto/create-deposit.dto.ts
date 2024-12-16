import { IsNotEmpty } from 'class-validator';

export class CreateDepositDto {

    @IsNotEmpty()
    readonly price!: number

    @IsNotEmpty()
    readonly currencyCode!: string

}