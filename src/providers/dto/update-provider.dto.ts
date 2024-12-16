import { IsNotEmpty, IsOptional, Length, ValidateIf } from "class-validator";

export class UpdateProviderDto {

    @IsNotEmpty()
    readonly documentType!: string

    @ValidateIf(obj => obj.documentType === 'RUC')
    @IsNotEmpty()
    @Length(11)
    readonly document!: string

    @IsNotEmpty()
    readonly name!: string

    @IsOptional()
    readonly address!: string

    @IsOptional()
    readonly mobileNumber!: string

    @IsOptional()
    readonly email!: string

    @IsOptional()
    readonly banks!: any[]

}