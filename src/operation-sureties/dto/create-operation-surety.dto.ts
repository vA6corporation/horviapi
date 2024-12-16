import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateOperationSuretyDto {
    
    @IsNotEmpty()
    readonly financierId!: string

    @IsNotEmpty()
    readonly emitionAt!: string

    @IsOptional()
    readonly deliveredAt!: string

    @IsOptional()
    readonly observations!: string

    @IsNotEmpty()
    readonly operationId!: string

}