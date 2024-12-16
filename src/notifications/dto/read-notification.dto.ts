import { Exclude, Expose, Type } from "class-transformer";
import { ReadBusinessDto } from "src/businesses/dto/read-business.dto";
import { ReadCommercialDto } from "src/commercials/dto/read-commercial.dto";
import { ReadSeaceDto } from "src/seaces/dto/read-seace.dto";

@Exclude()
export class ReadNotificationDto {

    @Expose()
    readonly _id!: string

    @Expose()
    readonly businessId!: string

    @Expose()
    readonly seaceId!: string

    @Expose()
    readonly userId!: string

    @Expose()
    @Type(() => ReadBusinessDto)
    readonly business!: ReadBusinessDto

    @Expose()
    @Type(() => ReadSeaceDto)
    readonly seace!: ReadSeaceDto

    @Expose()
    @Type(() => ReadCommercialDto)
    readonly commercial!: ReadCommercialDto

    @Expose()
    readonly winners!: string[]

    @Expose()
    readonly createdAt!: string

    @Expose()
    readonly adjudicatedAt!: string

}