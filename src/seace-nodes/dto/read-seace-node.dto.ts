import { Exclude, Expose, Type } from "class-transformer";

@Exclude()
export class ReadSeaceNodeDto {

    @Expose()
    @Type(() => String)
    readonly _id!: string

    @Expose()
    readonly name!: string

    @Expose()
    readonly mimeType!: string

    @Expose()
    readonly fileType!: string

    @Expose()
    readonly size!: number

    @Expose()
    readonly insuranceId!: string

    @Expose()
    readonly userId!: string

}