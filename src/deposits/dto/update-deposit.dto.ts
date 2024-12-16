import { IsNotEmpty } from 'class-validator';

export class UpdateDepositDto {
  @IsNotEmpty()
  readonly price!: number;

  @IsNotEmpty()
  readonly isPaid!: boolean;

  @IsNotEmpty()
  readonly currencyCode!: string;
}
