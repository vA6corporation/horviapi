import { Exclude, Expose, Type } from "class-transformer";
import { Types } from "mongoose";

@Exclude()
export class ReadCustomerDto {

    @Expose()
    readonly _id!: string

    @Expose()
    readonly documentType!: string

    @Expose()
    readonly document!: string

    @Expose()
    readonly name!: string

    @Expose()
    readonly partnershipName!: string

    @Expose()
    readonly address!: string

    @Expose()
    readonly email!: string

    @Expose()
    readonly mobileNumber!: string

    @Expose()
    readonly commercialId!: string

}