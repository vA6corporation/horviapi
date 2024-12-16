import { Exclude, Expose, Type } from "class-transformer";
import { ReadBeneficiaryDto } from "src/beneficiaries/dto/read-beneficiary.dto";
import { ReadBusinessDto } from "src/businesses/dto/read-business.dto";
import { ReadGuaranteeDto } from "./read-guarantee.dto";
import { ReadPartnershipDto } from "src/partnerships/dto/read-partnership.dto";

@Exclude()
export class ReadTemplateDto {

    @Expose()
    readonly _id!: string

    @Expose()
    readonly objectDescription!: string

    @Expose()
    readonly executionPlace!: string

    @Expose()
    readonly baseBudget!: number

    @Expose()
    readonly contractAmount!: number

    @Expose()
    readonly daysLimit!: number

    @Expose()
    readonly depositorName!: string

    @Expose()
    readonly startAt!: string

    @Expose()
    readonly partnershipId!: string | null

    @Expose()
    readonly businessId!: string

    @Expose()
    readonly beneficiaryId!: string

    @Expose()
    @Type(() => ReadPartnershipDto)
    readonly partnership!: ReadPartnershipDto | null

    @Expose()
    @Type(() => ReadBusinessDto)
    readonly business!: ReadBusinessDto

    @Expose()
    @Type(() => ReadBeneficiaryDto)
    readonly beneficiary!: ReadBeneficiaryDto

    @Expose()
    @Type(() => ReadGuaranteeDto)
    readonly guaranties!: ReadGuaranteeDto[]

}