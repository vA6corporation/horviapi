import { Exclude, Expose, Type } from "class-transformer"
import { ReadSuretyDto } from "src/sureties/dto/read-surety.dto"

@Exclude()
export class ReadChequeDto {

    @Expose()
    @Type(() => String)
    readonly _id!: string

    @Expose()
    readonly paymentType!: string

    @Expose()
    readonly price!: number

    @Expose()
    readonly paymentAt!: string

    @Expose()
    readonly extensionAt!: string

    @Expose()
    readonly isPaid!: boolean

    @Expose()
    readonly deletedAt!: string

    @Expose()
    readonly observations!: string

    @Expose()
    readonly currencyCode!: string

    @Expose()
    readonly suretyId!: string

    @Expose()
    @Type(() => ReadSuretyDto)
    readonly surety!: ReadSuretyDto

}