import { Exclude, Expose } from "class-transformer";
import { ReadUserDto } from "src/users/dto/read-user.dto";

@Exclude()
export class ReadProfileDto {

    @Expose()
    readonly user!: ReadUserDto

}