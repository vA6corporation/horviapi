import { IsNotEmpty } from 'class-validator';

export class CreateInsuranceNodeDto {

    @IsNotEmpty()
    readonly name!: string

    @IsNotEmpty()
    readonly mimeType!: string

    @IsNotEmpty()
    readonly fileType!: string

    @IsNotEmpty()
    readonly size!: number

}