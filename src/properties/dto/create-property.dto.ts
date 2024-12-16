import { IsNotEmpty, IsOptional } from "class-validator";

export class CreatePropertyDto {
  
  @IsNotEmpty()
  readonly description: string = '';

  @IsNotEmpty()
  readonly location: string = '';

  @IsNotEmpty()
  readonly landArea: number = 0;

  @IsNotEmpty()
  readonly constructionArea: number = 0;

  @IsNotEmpty()
  readonly commercialPrice: number = 0;

  @IsOptional()
  readonly mortgagePrice: number = 0;

  @IsOptional()
  readonly debt: number = 0;

  @IsOptional()
  readonly financier: string = '';

  @IsOptional()
  readonly inscription: string = '';

  @IsOptional()
  readonly purchaseAt: string = '';

  @IsOptional()
  readonly encumbrance: number = 0;

  @IsNotEmpty()
  readonly isMortgage: boolean = false;

  @IsNotEmpty()
  readonly isFamiliarPatrimony: boolean = false; 

}