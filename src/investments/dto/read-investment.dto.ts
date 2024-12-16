import { Exclude, Expose } from "class-transformer";

@Exclude()
export class ReadInvestmentDto {

  @Expose()
  readonly _id: string = '';

  @Expose()
  readonly type: string = '';

  @Expose()
  readonly quantity: number = 0;

  @Expose()
  readonly price: number = 0;

  @Expose()
  readonly encumbrance: number = 0;
  
  @Expose()
  readonly typeAccount!: string;

  @Expose()
  readonly bankDetail!: string;

  @Expose()
  readonly gravamen!: number;

  @Expose()
  readonly comercialPrice!: number;
}