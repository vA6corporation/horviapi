import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateCallDto {

    @IsNotEmpty()
    readonly scheduledAt!: string

    @IsOptional()
    readonly deletedAt!: string | null

} 