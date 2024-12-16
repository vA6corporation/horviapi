import { Exclude, Expose } from "class-transformer";
import { Types } from "mongoose";

@Exclude()
export class ReadDeviceDto {

  @Expose()
  readonly _id!: Types.ObjectId;

  @Expose()
  readonly deviceId!: string;

  @Expose()
  readonly name!: string;

  @Expose()
  readonly userId!: string;

  @Expose()
  readonly isActive!: string;

}