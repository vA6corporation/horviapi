import { Exclude, Expose } from "class-transformer";

@Exclude()
export class ReadPropertyDto {

  @Expose()
  readonly _id: string = '';

  @Expose()
  readonly description: string = '';

  @Expose()
  readonly location: string = '';

  @Expose()
  readonly landArea: number = 0;

  @Expose()
  readonly constructionArea: number = 0;

  @Expose()
  readonly commercialPrice: number = 0;

  @Expose()
  readonly mortgagePrice: number = 0;

  @Expose()
  readonly debt: number = 0;

  @Expose()
  readonly financier: string = '';

  @Expose()
  readonly inscription: string = '';

  @Expose()
  readonly purchaseAt: string = '';

  @Expose()
  readonly encumbrance: number = 0;

  @Expose()
  readonly isMortgage: boolean = false;

  @Expose()
  readonly isFamiliarPatrimony: boolean = false;

}