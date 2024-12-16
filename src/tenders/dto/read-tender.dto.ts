import { Exclude, Expose, Type } from "class-transformer";
import { ReadBeneficiaryDto } from "src/beneficiaries/dto/read-beneficiary.dto";
import { ReadBusinessDto } from "src/businesses/dto/read-business.dto";
import { ReadCommercialDto } from "src/commercials/dto/read-commercial.dto";
import { ReadPartnershipDto } from "src/partnerships/dto/read-partnership.dto";
import { ReadPaymentDto } from "src/payments/dto/read-payment.dto";
import { ReadSuretyDto } from "src/sureties/dto/read-surety.dto";
import { ReadTenderNodeDto } from "src/tender-nodes/dto/read-tender-node.dto";

@Exclude()
export class ReadTenderDto {

    @Expose()
    readonly _id!: string

    @Expose()
    readonly commission!: number

    @Expose()
    readonly objectDescription!: string

    @Expose()
    readonly awardedAmount!: number

    @Expose()
    readonly observations!: string

    @Expose()
    readonly observationsPayment!: string

    @Expose()
    readonly emitionAt!: string

    @Expose()
    readonly startAt!: string

    @Expose()
    readonly dayLimit!: string

    @Expose()
    readonly code!: string

    @Expose()
    readonly percentageOfCompletion!: number

    @Expose()
    readonly processStatusCode!: string

    @Expose()
    readonly constructionCode!: string

    @Expose()
    readonly constructionCodeType!: string

    @Expose()
    readonly processStatusCodeType!: string

    @Expose()
    readonly partnershipId!: string

    @Expose()
    readonly commercialId!: string

    @Expose()
    @Type(() => ReadPartnershipDto)
    readonly partnership!: ReadPartnershipDto | null

    @Expose()
    @Type(() => ReadBusinessDto)
    readonly business!: ReadBusinessDto

    @Expose()
    @Type(() => ReadCommercialDto)
    readonly commercial!: ReadCommercialDto

    @Expose()
    @Type(() => ReadBeneficiaryDto)
    readonly beneficiary!: ReadBeneficiaryDto

    @Expose()
    @Type(() => ReadBeneficiaryDto)
    readonly percent!: ReadBeneficiaryDto

    @Expose()
    @Type(() => ReadPaymentDto)
    readonly payments!: ReadPaymentDto[]

    @Expose()
    @Type(() => ReadSuretyDto)
    readonly sureties!: ReadSuretyDto[]

    @Expose()
    @Type(() => ReadTenderNodeDto)
    readonly nodes!: ReadTenderNodeDto[]

    @Expose()
    readonly createdAt!: string

}