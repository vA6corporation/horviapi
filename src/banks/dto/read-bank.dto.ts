import { Exclude, Expose, Transform, Type } from "class-transformer";

@Exclude()
export class ReadBankDto {

    @Expose()
    @Type(() => String)
    readonly _id!: string

    @Expose()
    readonly name!: string

    @Expose()
    readonly bankName!: string

    @Expose()
    readonly accountNumber!: string

    @Expose()
    readonly accountType!: string

    @Expose()
    readonly cci!: string

    @Expose()
    readonly currencyCode!: string

    @Expose()
    @Transform(({ obj }) => obj.currencyCode === 'PEN' ? 'SOLES' : 'DOLARES')
    readonly currencyName!: string

    @Expose()
    @Type(() => String)
    readonly providerId!: string

}