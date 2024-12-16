import { IsOptional } from "class-validator";

export class UpdateSeaceDto {

    @IsOptional()
    readonly observations!: string

    @IsOptional()
    readonly color!: string

}