import { Exclude, Expose } from "class-transformer";
import { ReadUserDto } from "src/users/dto/read-user.dto";

@Exclude()
export class ReadLoginDto {

    @Expose()
    readonly user!: ReadUserDto

    @Expose()
    readonly accessToken!: string

}