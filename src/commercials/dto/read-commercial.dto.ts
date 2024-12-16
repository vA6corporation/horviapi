import { Exclude, Expose, Transform, Type } from "class-transformer";

@Exclude()
export class ReadCommercialDto {

    @Expose()
    readonly _id!: string

    @Expose()
    readonly name!: string

    @Expose()
    @Transform(({ obj }) => {
        const names = obj.name.split(' ')
        return names[0]
    })
    readonly firstName!: string
    
}