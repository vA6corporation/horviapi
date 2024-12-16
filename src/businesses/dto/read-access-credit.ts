import { Exclude, Expose } from "class-transformer";

@Exclude()
export class ReadAccessCreditDto {

  @Expose()
  readonly insuranceCarrier: string = '';
  
  @Expose()
  readonly financialProducts: string = '';
  
  @Expose()
  readonly creditLine: number = 0;
  
  @Expose()
  readonly amount: number = 0;
  
  @Expose()
  readonly typeGuarantee: string = '';
  
  @Expose()
  readonly amountGuarantee: number = 0;

}