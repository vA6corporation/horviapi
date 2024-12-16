import { IsNotEmpty, Length } from 'class-validator';

export class UpdateFinancierDto {

    @Length(11)
    @IsNotEmpty()
    readonly document!: string

    @IsNotEmpty()
    readonly name!: string

}