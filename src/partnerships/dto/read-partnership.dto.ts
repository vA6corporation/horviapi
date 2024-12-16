import { Exclude, Expose, Type } from "class-transformer";
import { ReadBusinessDto } from "src/businesses/dto/read-business.dto";
import { ReadPartnershipItemDto } from "./read-partnership-item.dto";

@Exclude()
export class ReadPartnershipDto {

    @Expose()
    readonly _id!: string

    @Expose()
    readonly document!: string

    @Expose()
    readonly name!: string

    @Expose()
    readonly email!: string

    @Expose()
    readonly phoneNumber!: string

    @Expose()
    readonly address!: string

    @Expose()
    readonly mobileNumber!: string

    @Expose()
    readonly constitutedAt!: string

    @Expose()
    readonly representativeName!: string

    @Expose()
    readonly representativeDocument!: string

    @Expose()
    readonly representativeNationality!: string

    @Expose()
    readonly businessId!: string

    @Expose()
    readonly businessIds!: string[]

    @Expose()
    @Type(() => ReadBusinessDto)
    readonly business!: ReadBusinessDto

    @Expose()
    @Type(() => ReadPartnershipItemDto)
    readonly partnershipItems!: ReadPartnershipItemDto[]

    @Expose()
    readonly userId!: string

}