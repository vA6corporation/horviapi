import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateCommercialDto {

    @IsNotEmpty()
    readonly name!: string

    @IsOptional()
    readonly deletedAt!: string

}