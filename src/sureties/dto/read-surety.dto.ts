import { Exclude, Expose, Transform, Type } from "class-transformer";
import { ReadBeneficiaryDto } from "src/beneficiaries/dto/read-beneficiary.dto";
import { ReadBusinessDto } from "src/businesses/dto/read-business.dto";
import { ReadFinancierDto } from "src/financiers/dto/read-financier.dto";
import { ReadPartnershipDto } from "src/partnerships/dto/read-partnership.dto";
import { ReadPaymentDto } from "src/payments/dto/read-payment.dto";
import { ReadTenderDto } from "src/tenders/dto/read-tender.dto";
import { diffDays } from "src/diff-days";
import { ReadSuretyNodeDto } from "src/surety-nodes/dto/read-surety-node.dto";
import { ReadChequeDto } from "src/cheques/dto/read-cheque.dto";
import { ReadDepositDto } from "src/deposits/dto/read-deposit.dto";
import { NoRenewStatus, ProcessStatus, SuretyPreStatus, SuretyStatus } from "src/schemas/surety.schema";

@Exclude()
export class ReadSuretyDto {

    @Expose()
    readonly _id!: string

    @Expose()
    readonly policyNumber!: string

    @Expose()
    readonly price!: number

    @Expose()
    readonly pagare!: number

    @Expose()
    readonly startAt!: string

    @Expose()
    readonly endAt!: string

    @Expose()
    readonly voucherAt!: string

    @Expose()
    readonly suretyStatus!: SuretyStatus

    @Expose()
    readonly suretyPreStatus!: SuretyPreStatus

    @Expose()
    readonly noRenewStatus!: NoRenewStatus

    @Expose()
    readonly deliveryStatus!: string

    @Expose()
    readonly paymentStatus!: string

    @Expose()
    readonly processStatus!: ProcessStatus

    @Expose()
    readonly suretyStatusLabel!: string

    @Expose()
    readonly suretyType!: string

    @Expose()
    readonly guarantee!: number

    @Expose()
    readonly prima!: number

    @Expose()
    readonly commission!: number

    @Expose()
    readonly businessId!: string

    @Expose()
    readonly financierId!: string

    @Expose()
    readonly beneficiaryId!: string

    @Expose()
    readonly partnershipId!: string

    @Expose()
    readonly tenderId!: string

    @Expose()
    readonly commercialId!: string

    @Expose()
    @Type(() => ReadBusinessDto)
    readonly business!: ReadBusinessDto

    @Expose()
    @Type(() => ReadFinancierDto)
    readonly financier!: ReadFinancierDto

    @Expose()
    @Type(() => ReadBeneficiaryDto)
    readonly beneficiary!: ReadBeneficiaryDto

    @Expose()
    @Type(() => ReadPartnershipDto)
    readonly partnership!: ReadPartnershipDto

    @Expose()
    @Type(() => ReadTenderDto)
    readonly tender!: ReadTenderDto

    @Expose()
    @Transform(({ obj }) => {
        const diff = diffDays(obj.startAt, obj.endAt)
        return diff
    })
    readonly daysLimit!: number

    @Expose()
    @Type(() => ReadPaymentDto)
    readonly payments!: ReadPaymentDto[]

    @Expose()
    readonly mails!: number

    @Expose()
    readonly currencyCode!: string

    @Expose()
    readonly observations!: string

    @Expose()
    readonly createdAt!: string

    @Expose()
    readonly updatedAt!: string

    @Expose()
    readonly isEmition!: boolean

    @Expose()
    readonly isPayed!: boolean

    @Expose()
    readonly suretyTypeLabel!: string

    @Expose()
    readonly color!: string

    @Expose()
    @Type(() => ReadSuretyNodeDto)
    readonly nodes!: ReadSuretyNodeDto[]

    @Expose()
    @Type(() => ReadChequeDto)
    readonly cheques!: ReadChequeDto[]

    @Expose()
    @Type(() => ReadDepositDto)
    readonly deposits!: ReadDepositDto[]

}