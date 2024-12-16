import { Exclude, Expose } from "class-transformer";

@Exclude()
export class ReadGuaranteeDto {

    @Expose()
    readonly guaranteeType!: string

    @Expose()
    readonly currencyCode!: string

    @Expose()
    readonly amount!: number

    @Expose()
    readonly startAt!: string

    @Expose()
    readonly endAt!: string

    @Expose()
    readonly daysLimit!: number

    @Expose()
    readonly guaranteeLabel!: string

}