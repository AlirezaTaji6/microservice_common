import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsPositive, Max } from "class-validator";
import { ValidationConstants } from "../constants/validation.const";

export class IdDto {
    @ApiProperty()
    @Type(() => Number)
    @IsInt()
    @IsPositive()
    @Max(ValidationConstants.INT_VALUE_MAX)
    id: number;
}