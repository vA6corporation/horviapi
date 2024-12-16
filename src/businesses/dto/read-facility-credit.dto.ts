import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ReadFacilityCreditDto {

    @Expose()
    readonly financier!: string

    @Expose()
    readonly creditNumber!: string

    @Expose()
    readonly modality!: string

    @Expose()
    readonly creditLine!: number

    @Expose()
    readonly guaranteeGranted!: string

}