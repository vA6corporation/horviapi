import { IsNotEmpty } from "class-validator";

export class UpdateInvestmentDto {

  @IsNotEmpty()
  readonly type: string = '';

  @IsNotEmpty()
  readonly quantity: number = 0;

  @IsNotEmpty()
  readonly price: number = 0;
  
  @IsNotEmpty()
  readonly typeAccount!: string;

  @IsNotEmpty()
  readonly bankDetail!: string;

  @IsNotEmpty()
  readonly gravamen!: number;

  @IsNotEmpty()
  readonly comercialPrice!: number;
}