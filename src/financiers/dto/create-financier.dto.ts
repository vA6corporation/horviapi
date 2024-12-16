import { IsNotEmpty, Length } from 'class-validator';

export class CreateFinancierDto {

    @Length(11)
    @IsNotEmpty()
    readonly document!: string

    @IsNotEmpty()
    readonly name!: string

}