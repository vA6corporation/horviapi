import { IsNotEmpty } from 'class-validator';

export class CreateIncomeDto {

  @IsNotEmpty()
  readonly typeIncome!: string;

  @IsNotEmpty()
  readonly origin!: string;

  @IsNotEmpty()
  readonly description!: string;

  @IsNotEmpty()
  readonly amount!: number;

}