import { IsInt, Min } from "class-validator";

export class CountDto{
    @IsInt()
    @Min(1)
    count: number;
}