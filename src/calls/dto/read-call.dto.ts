import { Expose, Type } from "class-transformer";
import { ReadSeaceDto } from "src/seaces/dto/read-seace.dto";

export class ReadCallDto {

    @Expose()
    readonly scheduledAt!: string

    @Expose()
    @Type(() => ReadSeaceDto)
    readonly seace!: ReadSeaceDto

}