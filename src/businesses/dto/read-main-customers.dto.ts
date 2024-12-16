import { Exclude, Expose } from "class-transformer";

@Exclude()
export class ReadMainCustomersDto {

  @Expose()
  readonly name: string = '';
  
  @Expose()
  readonly document: number = 0;
  
  @Expose()
  readonly turnBusiness: string = '';
  
  @Expose()
  readonly yearOne: string = '';
  
  @Expose()
  readonly itemOne: string = '';
  
  @Expose()
  readonly priceOne: number = 0;
  
  @Expose()
  readonly shoppingOne: number = 0;
  
  @Expose()
  readonly yearTwo: string = '';
  
  @Expose()
  readonly itemTwo: string = '';
  
  @Expose()
  readonly priceTwo: number = 0;
  
  @Expose()
  readonly shoppingTwo: number = 0;

}