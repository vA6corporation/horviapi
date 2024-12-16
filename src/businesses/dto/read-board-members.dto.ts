import { Exclude, Expose } from "class-transformer";

@Exclude()
export class ReadBoardMembersDto {

  @Expose()
  readonly position: string = '';

  @Expose()
  readonly name: string = '';

  @Expose()
  readonly typeDocument: string = '';

  @Expose()
  readonly document: number = 0;

  @Expose()
  readonly birthDate: string = '';

  @Expose()
  readonly countryOrigin: string = '';

  @Expose()
  readonly profession: string = '';

}