import { Exclude, Expose, Type } from "class-transformer";
import { ReadCommercialDto } from "src/commercials/dto/read-commercial.dto";

@Exclude()
export class ReadUserDto {

    @Expose()
    readonly _id!: string

    @Expose()
    readonly name!: string

    @Expose()
    readonly password!: string

    @Expose()
    readonly email!: string

    @Expose()
    readonly isAdmin!: boolean

    @Expose()
    readonly privileges!: any

    @Expose()
    readonly commercialId!: string

    @Expose()
    @Type(() => ReadCommercialDto)
    readonly commercial!: ReadCommercialDto

}