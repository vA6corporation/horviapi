import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ReadIncomeDto {

  @Expose()
  readonly typeIncome!: string;

  @Expose()
  readonly origin!: string;

  @Expose()
  readonly description!: string;

  @Expose()
  readonly amount!: number;

}