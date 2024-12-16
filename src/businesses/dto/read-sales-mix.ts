import { Exclude, Expose } from "class-transformer";

@Exclude()
export class ReadSalesMixDto {

  @Expose()
  readonly activity: string = '';
  @Expose()
  readonly amountOne: number = 0;
  @Expose()
  readonly percentageOne: number = 0;
  @Expose()
  readonly amountTwo: number = 0;
  @Expose()
  readonly percentageTwo: number = 0;

}