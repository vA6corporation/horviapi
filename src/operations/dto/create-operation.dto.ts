import { IsNotEmpty, IsOptional } from "class-validator"

export class CreateOperationDto {
    
    @IsNotEmpty()
    readonly secrex!: string

    @IsNotEmpty()
    readonly crecer!: string

    @IsNotEmpty()
    readonly mapfre!: string

    @IsNotEmpty()
    readonly insur!: string

    @IsNotEmpty()
    readonly avla!: string

    @IsOptional()
    readonly observations!: string

}