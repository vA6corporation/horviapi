import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateOperationDto {

    @IsNotEmpty()
    readonly operationStatus!: string
    
    @IsNotEmpty()
    readonly crecer!: boolean

    @IsNotEmpty()
    readonly secrex!: boolean

    @IsNotEmpty()
    readonly mapfre!: boolean

    @IsNotEmpty()
    readonly insur!: boolean

    @IsNotEmpty()
    readonly avla!: boolean

    @IsOptional()
    readonly sendInsuranceAt!: string

    @IsOptional()
    readonly observations!: string

}