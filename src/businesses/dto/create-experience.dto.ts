import { IsNotEmpty } from 'class-validator';

export class CreateExperienceDto {

    @IsNotEmpty()
    readonly convener!: string

    @IsNotEmpty()
    readonly objectDescription!: string

    @IsNotEmpty()
    readonly objectContract!: string

    @IsNotEmpty()
    readonly signaturedAt!: string

    @IsNotEmpty()
    readonly startAt!: string

    @IsNotEmpty()
    readonly endAt!: string

    @IsNotEmpty()
    readonly location!: string
    
    @IsNotEmpty()
    readonly price!: number

    @IsNotEmpty()
    readonly daysLimit!: string

    @IsNotEmpty()
    readonly advancedPercent!: string

    @IsNotEmpty()
    readonly isCompleted!: boolean

    @IsNotEmpty()
    readonly isOperator!: boolean

}
