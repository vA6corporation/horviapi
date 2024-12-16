import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCommercialDto {

    @IsNotEmpty()
    readonly name!: string

}