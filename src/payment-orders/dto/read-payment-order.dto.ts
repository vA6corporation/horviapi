import { Exclude, Expose, Type } from "class-transformer";
import { ReadProviderDto } from "../../providers/dto/read-provider.dto";

@Exclude()
export class ReadPaymentOrderDto {

    @Expose()
    @Type(() => String)
    readonly _id!: string

    @Expose()
    readonly concept!: string

    @Expose()
    readonly serie!: string

    @Expose()
    readonly createdAt!: string

    @Expose()
    readonly charge!: string

    @Expose()
    readonly operationNumber!: string

    @Expose()
    readonly observations!: string

    @Expose()
    readonly paymentAt!: string

    @Expose()
    @Type(() => String)
    readonly providerId!: string

    @Expose()
    @Type(() => String)
    readonly bankId!: string

    @Expose()
    readonly isPaid!: boolean

    @Expose()
    readonly urlPdf!: string | null

    @Expose()
    @Type(() => ReadProviderDto)
    readonly provider!: ReadProviderDto

}