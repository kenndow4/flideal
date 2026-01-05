import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class SigninDto {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    readonly email:string;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    readonly password:string;
}