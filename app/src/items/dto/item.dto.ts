import { IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";

export class ItemDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    price: number;

    @IsNumber()
    @Max(5)
    @Min(1)
    rating: number;
}