import { IsNotEmpty, IsString } from "class-validator";

export class TokensDto{
    @IsString()
    @IsNotEmpty()
    token: string;

    @IsString()
    @IsNotEmpty()
    refToken: string;
}