import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ReadExperienceDto {

    @Expose()
    readonly convener!: string

    @Expose()
    readonly objectDescription!: string

    @Expose()
    readonly objectContract!: string

    @Expose()
    readonly signaturedAt!: string

    @Expose()
    readonly startAt!: string

    @Expose()
    readonly endAt!: string

    @Expose()
    readonly location!: string

    @Expose()
    readonly price!: number

    @Expose()
    readonly daysLimit!: number

    @Expose()
    readonly advancedPercent!: number

    @Expose()
    readonly isCompleted!: boolean

    @Expose()
    readonly isOperator!: boolean

    @Expose()
    readonly experiencePartnerships!: any[]

}