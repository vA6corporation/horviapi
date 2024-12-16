import { Exclude, Expose, Type } from "class-transformer"

@Exclude()
export class ReadOperationSuretyNodeDto {

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
    readonly tenderId!: string

    @Expose()
    readonly userId!: string

}