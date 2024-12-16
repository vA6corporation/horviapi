import { Exclude, Expose } from "class-transformer";

@Exclude()
export class ReadTrialsDto {

  @Expose()
  readonly name: string = '';
  
  @Expose()
  readonly reason: string = '';
  
  @Expose()
  readonly amount: number = 0;
  
  @Expose()
  readonly court: string = '';
  
  @Expose()
  readonly proceedings: string = '';

}