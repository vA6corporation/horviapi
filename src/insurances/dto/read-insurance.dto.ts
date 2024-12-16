import { Exclude, Expose, Type } from "class-transformer";
import { ReadCommercialDto } from "src/commercials/dto/read-commercial.dto";
import { ReadCustomerDto } from "src/customers/dto/read-customer.dto";
import { ReadFinancierDto } from "src/financiers/dto/read-financier.dto";
import { ReadTenderDto } from "src/tenders/dto/read-tender.dto";
import { Types } from 'mongoose'

@Exclude()
export class ReadInsuranceDto {

    @Expose()
    readonly _id!: Types.ObjectId

    @Expose()
    readonly policyNumber!: string

    @Expose()
    readonly expirationAt!: string

    @Expose()
    readonly emitionAt!: string

    @Expose()
    readonly prima!: number

    @Expose()
    readonly commission!: number

    @Expose()
    readonly insuranceType!: string

    @Expose()
    readonly currencyCode!: string

    @Expose()
    readonly observations!: string

    @Expose()
    readonly isEmition!: boolean

    @Expose()
    readonly createdAt!: string

    @Expose()
    readonly financierId!: string

    @Expose()
    readonly commercialId!: string

    @Expose()
    readonly customerId!: string

    @Expose()
    readonly tenderId!: string

    @Expose()
    readonly userId!: string

    @Expose()
    readonly insuranceGroupId!: string

    @Expose()
    @Type(() => ReadFinancierDto)
    readonly financier!: ReadFinancierDto

    @Expose()
    @Type(() => ReadCommercialDto)
    readonly commercial!: ReadCommercialDto

    @Expose()
    @Type(() => ReadCustomerDto)
    readonly customer!: ReadCustomerDto

    @Expose()
    @Type(() => ReadTenderDto)
    readonly tender!: ReadTenderDto | null

}