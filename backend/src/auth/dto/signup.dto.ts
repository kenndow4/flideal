import { IsEmail, IsEmpty, IsNotEmpty, IsString, MinLength } from "class-validator";

export class SignupDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    readonly name:string;
    
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    readonly email:string;
    
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    readonly password:string;
}