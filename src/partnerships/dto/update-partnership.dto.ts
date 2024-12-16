import { IsNotEmpty, IsOptional, Length, Validate, ValidateIf } from 'class-validator';
import { ValidateDocument } from 'src/validate-document';

export class UpdatePartnershipDto {

    @ValidateIf(obj => obj.document)
    @IsNotEmpty()
    @Length(11)
    readonly document!: string

    @IsNotEmpty()
    readonly name!: string

    @IsOptional()
    readonly email!: string

    @IsOptional()
    readonly address!: string

    @IsOptional()
    readonly phoneNumber!: string

    @IsOptional()
    readonly mobileNumber!: string

    @IsOptional()
    readonly constitutedAt!: string

    @IsNotEmpty()
    readonly representativeDocumentType!: string

    @Validate(ValidateDocument, ['representativeDocumentType'])
    readonly representativeDocument!: string

    @IsNotEmpty()
    readonly representativeName!: string

    @IsOptional()
    readonly representativeNationality!: string

    @IsOptional()
    readonly businessId!: string

}