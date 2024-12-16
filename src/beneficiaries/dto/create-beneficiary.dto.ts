import { IsNotEmpty, IsOptional, Length } from 'class-validator';

export class CreateBeneficiaryDto {

    @IsNotEmpty()
    @Length(11)
    readonly document!: string

    @IsNotEmpty()
    readonly name!: string

    @IsOptional()
    readonly email!: string

    @IsOptional()
    readonly mobileNumber!: string

    @IsOptional()
    readonly phoneNumber!: string

    @IsOptional()
    readonly annexed!: string

    @IsOptional()
    readonly address!: string

    @IsOptional()
    readonly legalRepresentative!: string

    @IsOptional()
    readonly positionLegalRepresentative!: string

    @IsOptional()
    readonly contactPerson!: string

    @IsOptional()
    readonly positioncontactPerson!: string

}