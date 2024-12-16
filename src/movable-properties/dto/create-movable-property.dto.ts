import { IsNotEmpty } from "class-validator";

export class CreateMovablePropertyDto {
  
  @IsNotEmpty()
  readonly description: string = '';

  @IsNotEmpty()
  readonly modelo: string = '';

  @IsNotEmpty()
  readonly year: number = 0;

  @IsNotEmpty()
  readonly placa: string = '';

  @IsNotEmpty()
  readonly serie: string = '';

  @IsNotEmpty()
  readonly commercialPrice: number = 0;

  @IsNotEmpty()
  readonly encumbrance: number = 0;

  @IsNotEmpty()
  readonly warrantyPrice: number = 0;

  @IsNotEmpty()
  readonly debtPrice: number = 0;

  @IsNotEmpty()
  readonly financier: string = '';

  @IsNotEmpty()
  readonly isWarranty: boolean = false;

  @IsNotEmpty()
  readonly Brand: string = '';

  @IsNotEmpty()
  readonly Antiquity: string = '';

  @IsNotEmpty()
  readonly capacity: string = '';

  @IsNotEmpty()
  readonly location: string = '';

}