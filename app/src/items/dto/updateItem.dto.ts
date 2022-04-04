import { ArrayNotEmpty, IsIn, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class UpdateItemDto{
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name?: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    description?: string;

    @IsNumber()
    @IsOptional()
    price?: number;

    @IsNumber()
    @Max(5)
    @Min(1)
    @IsOptional()
    rating?: number;

    @IsString()
    @IsOptional()
    photo?: string;

    @IsString()
    @IsOptional()
    @IsIn(['male', 'female'])
    sex?: 'male' | 'female';

    @IsNumber()
    @IsOptional()
    discountPrice?: number;

    @IsString({each: true})
    @ArrayNotEmpty()
    @IsOptional()
    categories?: string[];
}