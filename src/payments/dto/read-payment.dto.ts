import { Exclude, Expose, Type } from 'class-transformer';
import { ReadBankDto } from 'src/banks/dto/read-bank.dto';

@Exclude()
export class ReadPaymentDto {

    @Expose()
    @Type(() => String)
    readonly _id!: string

    @Expose()
    readonly charge!: number

    @Expose()
    readonly paymentAt!: string

    @Expose()
    readonly observations!: string

    @Expose()
    readonly deletedAt!: string

    @Expose()
    readonly bankId!: string

    @Expose()
    readonly tenderId!: string

    @Expose()
    @Type(() => ReadBankDto)
    readonly bank!: ReadBankDto

}