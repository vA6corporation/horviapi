import { IsNotEmpty, IsOptional } from "class-validator";

export class CreatePaymentDto {

    @IsNotEmpty()
    readonly charge!: number

    @IsNotEmpty()
    readonly paymentAt!: string

    @IsOptional()
    readonly observations!: string

    // @IsNotEmpty()
    // readonly bankId!: string

    @IsNotEmpty()
    readonly parentId!: string

    @IsNotEmpty()
    readonly onModel!: string

}