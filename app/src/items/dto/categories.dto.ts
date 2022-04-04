import { ArrayNotEmpty, IsOptional, IsString } from "class-validator";

export class CategoriesDto{
    @IsOptional()
    @IsString({each: true})
    @ArrayNotEmpty()
    categories: string[];
}