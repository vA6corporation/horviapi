import { Exclude, Expose } from "class-transformer"

@Exclude()
export class ReadMovablePropertyDto {

    @Expose()
    readonly _id!: string

    @Expose()
    readonly description!: string

    @Expose()
    readonly modelo!: string

    @Expose()
    readonly year!: number

    @Expose()
    readonly placa!: string

    @Expose()
    readonly serie!: string

    @Expose()
    readonly commercialPrice!: number

    @Expose()
    readonly encumbrance!: number

    @Expose()
    readonly warrantyPrice!: number

    @Expose()
    readonly debtPrice!: number

    @Expose()
    readonly financier!: string

    @Expose()
    readonly isWarranty!: boolean

    @Expose()
    readonly Brand!: string

    @Expose()
    readonly Antiquity!: string

    @Expose()
    readonly capacity!: string

    @Expose()
    readonly location!: string

}