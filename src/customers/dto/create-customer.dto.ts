import { IsNotEmpty, IsOptional, Length, Validate } from 'class-validator';
import { ValidateDocument } from 'src/validate-document';

export class CreateCustomerDto {

    @IsNotEmpty()
    readonly documentType!: string

    @Validate(ValidateDocument, ['documentType'])
    readonly document!: string

    @IsNotEmpty()
    readonly name!: string

    @IsOptional()
    readonly partnershipName!: string

    @IsNotEmpty()
    readonly email!: string

    @Length(9)
    @IsNotEmpty()
    readonly mobileNumber!: string

    @IsNotEmpty()
    readonly address!: string

}