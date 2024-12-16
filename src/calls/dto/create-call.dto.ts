import { IsNotEmpty } from "class-validator";

export class CreateCallDto {

    @IsNotEmpty()
    readonly scheduledAt!: string

} 