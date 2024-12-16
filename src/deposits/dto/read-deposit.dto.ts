import { Exclude, Expose } from "class-transformer";
import { Types } from "mongoose";

@Exclude()
export class ReadDepositDto {
  @Expose()
  readonly _id!: Types.ObjectId;
  
  @Expose()
  readonly price!: number;

  @Expose()
  readonly endDate!: string;

  @Expose()
  readonly onModel!: string;

  @Expose()
  readonly currencyCode!: string;

  @Expose()
  readonly guaranteeId!: string;

  @Expose()
  readonly officeId!: string;
  
}