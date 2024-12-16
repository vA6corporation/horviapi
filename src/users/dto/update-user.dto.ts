import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateUserDto {

    @IsNotEmpty()
    readonly name!: string

    @IsNotEmpty()
    readonly email!: string

    @IsNotEmpty()
    readonly password!: string

    @IsOptional()
    readonly privileges!: any

    @IsOptional()
    readonly deletedAt!: string

    @IsOptional()
    readonly commercialId!: string | null

}