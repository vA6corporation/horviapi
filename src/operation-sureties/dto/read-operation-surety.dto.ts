import { Exclude, Expose, Type } from "class-transformer";
import { ReadFinancierDto } from "src/financiers/dto/read-financier.dto";

@Exclude()
export class ReadOperationSuretyDto {

    @Expose()
    @Type(() => String)
    readonly _id!: string

    @Expose()
    readonly financierId!: string

    @Expose()
    readonly emitionAt!: string

    @Expose()
    readonly observations!: string

    @Expose()
    readonly deliveredAt!: string | null

    @Expose()
    readonly operationSuretyType!: string

    @Expose()
    readonly operationSuretyTypeLabel!: string

    @Expose()
    @Type(() => ReadFinancierDto)
    readonly financier!: ReadFinancierDto

    @Expose()
    readonly operationId!: string

    @Expose()
    readonly userId!: string

}