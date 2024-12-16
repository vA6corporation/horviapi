import { IsNotEmpty } from 'class-validator';

export class CreateFacilityCreditDto {

  @IsNotEmpty()
  readonly financier!: string;

  @IsNotEmpty()
  readonly creditNumber!: string;
  
  @IsNotEmpty()
  readonly modality!: string;

  @IsNotEmpty()
  readonly creditLine!: number;

  @IsNotEmpty()
  readonly guaranteeGranted!: string;

}