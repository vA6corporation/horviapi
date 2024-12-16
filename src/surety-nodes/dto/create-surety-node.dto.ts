import { IsNotEmpty } from 'class-validator';

export class CreateSuretyNodeDto {

    @IsNotEmpty()
    readonly name!: string

    @IsNotEmpty()
    readonly mimeType!: string

    @IsNotEmpty()
    readonly fileType!: string

    @IsNotEmpty()
    readonly size!: number

}