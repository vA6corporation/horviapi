import { IsNotEmpty } from 'class-validator';

export class CreatePartnershipItemDto {

  @IsNotEmpty()
  readonly percent!: string;

  @IsNotEmpty()
  readonly businessId!: string;

}