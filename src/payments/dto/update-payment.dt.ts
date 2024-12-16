import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdatePaymentDto {

    @IsNotEmpty()
    readonly charge!: number

    @IsNotEmpty()
    readonly paymentAt!: string

    @IsNotEmpty()
    readonly observations!: string

    // @IsNotEmpty()
    // readonly bankId!: string

    @IsOptional()
    readonly deletedAt!: string

}