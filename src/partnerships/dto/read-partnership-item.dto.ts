import { Exclude, Expose, Type } from "class-transformer";
import { ReadBusinessDto } from "src/businesses/dto/read-business.dto";

@Exclude()
export class ReadPartnershipItemDto {

    @Expose()
    readonly _id!: string

    @Expose()
    readonly percent!: number

    @Expose()
    readonly businessId!: string

    @Expose()
    @Type(() => ReadBusinessDto)
    readonly business!: ReadBusinessDto

}