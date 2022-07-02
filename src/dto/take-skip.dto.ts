import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, Max, Min } from "class-validator";

export class TakeSkipDto {
    @ApiProperty({ default: 25 })
    @Type(() => Number)
    @IsInt()
    @Min(0)
    @Max(25)
    take: number;

    @ApiProperty({ default: 0 })
    @Type(() => Number)
    @IsInt()
    @Min(0)
    skip: number

}