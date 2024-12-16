import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTenderDto {

    @IsOptional()
    readonly commission!: number

    @IsNotEmpty()
    readonly objectDescription!: string

    @IsNotEmpty()
    readonly awardedAmount!: number

    @IsNotEmpty()
    readonly emitionAt!: string

    @IsNotEmpty()
    readonly processStatusCode!: string

    @IsNotEmpty()
    readonly constructionCode!: string

    @IsNotEmpty()
    readonly businessId!: string

    @IsOptional()
    readonly partnershipId!: string

    @IsNotEmpty()
    readonly commercialId!: string

    @IsNotEmpty()
    readonly beneficiaryId!: string

}