import { Exclude, Expose, Type } from "class-transformer";
import { ReadSeaceDto } from "src/seaces/dto/read-seace.dto";

@Exclude()
export class ReadOperationDto {

    @Expose()
    @Type(() => String)
    readonly _id!: string

    @Expose()
    readonly operationStatus!: string

    @Expose()
    readonly operationStatusLabel!: string

    @Expose()
    readonly secrex!: string

    @Expose()
    readonly crecer!: string

    @Expose()
    readonly mapfre!: string

    @Expose()
    readonly insur!: string

    @Expose()
    readonly avla!: string

    @Expose()
    readonly observations!: string

    @Expose()
    readonly updatedAt!: string

    @Expose()
    readonly createdAt!: string

    @Expose()
    readonly sendInsuranceAt!: string | null

    @Expose()
    readonly seaceId!: string

    @Expose()
    @Type(() => ReadSeaceDto)
    readonly seace!: ReadSeaceDto

}