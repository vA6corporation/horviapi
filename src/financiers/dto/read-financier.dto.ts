import { Exclude, Expose } from "class-transformer";
import { Types } from "mongoose";

@Exclude()
export class ReadFinancierDto {

    @Expose()
    readonly _id!: Types.ObjectId

    @Expose()
    readonly document!: string

    @Expose()
    readonly name!: string

}