import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdatePaymentOrderDto {

    @IsNotEmpty()
    readonly concept!: string

    @IsNotEmpty()
    readonly serie!: string

    @IsNotEmpty()
    readonly charge!: number

    @IsOptional()
    readonly observations!: string

    @IsNotEmpty()
    readonly paymentAt!: string

    @IsOptional()
    readonly operationNumber!: string

    @IsNotEmpty()
    readonly isPaid!: boolean

    @IsNotEmpty()
    readonly providerId!: string

    @IsNotEmpty()
    readonly bankId!: string

}