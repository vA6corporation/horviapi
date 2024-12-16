import { IsNotEmpty } from "class-validator";

export class UpdateBankDto {

    @IsNotEmpty()
    readonly name!: string

    @IsNotEmpty()
    readonly bankName!: string

    @IsNotEmpty()
    readonly currencyCode!: string

    @IsNotEmpty()
    readonly accountNumber!: string

    @IsNotEmpty()
    readonly accountType!: string

    @IsNotEmpty()
    readonly cci!: string
    
}