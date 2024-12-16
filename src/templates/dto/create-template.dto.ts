import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTemplateDto {

    @IsNotEmpty()
    readonly objectDescription!: string

    @IsNotEmpty()
    readonly executionPlace!: string

    @IsNotEmpty()
    readonly baseBudget!: number

    @IsNotEmpty()
    readonly contractAmount!: number

    @IsNotEmpty()
    readonly daysLimit!: number

    @IsOptional()
    readonly depositorName!: string

    @IsNotEmpty()
    readonly startAt!: string

    @IsOptional()
    readonly partnershipId!: string

    @IsNotEmpty()
    readonly businessId!: string

    @IsNotEmpty()
    readonly beneficiaryId!: string

}