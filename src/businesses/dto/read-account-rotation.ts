import { Exclude, Expose } from "class-transformer";

@Exclude()
export class ReadAccountRotationDto {

  @Expose()
  readonly typeAccount: string = '';
  
  @Expose()
  readonly rotation: number = 0;

}