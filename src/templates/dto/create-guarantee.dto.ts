import { IsNotEmpty } from "class-validator";

export class CreateGuaranteeDto {

    @IsNotEmpty()
    readonly guaranteeType!: string

    @IsNotEmpty()
    readonly currencyCode!: string

    @IsNotEmpty()
    readonly amount!: number

    @IsNotEmpty()
    readonly startAt!: string

    @IsNotEmpty()
    readonly endAt!: string

    @IsNotEmpty()
    readonly daysLimit!: number

}