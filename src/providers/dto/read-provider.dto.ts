import { Exclude, Expose, Type } from "class-transformer";
import { ReadBankDto } from "../../banks/dto/read-bank.dto";

@Exclude()
export class ReadProviderDto {

    @Expose()
    @Type(() => String)
    readonly _id!: string

    @Expose()
    readonly documentType!: string

    @Expose()
    readonly document!: string

    @Expose()
    readonly name!: string

    @Expose()
    readonly mobileNumber!: string

    @Expose()
    readonly address!: string

    @Expose()
    readonly email!: string

    @Expose()
    readonly deletedAt!: string | null

    @Expose()
    @Type(() => ReadBankDto)
    readonly banks!: ReadBankDto[]

}