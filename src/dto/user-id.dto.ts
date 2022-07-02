import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsInt, IsPositive, Max } from "class-validator";
import { ValidationConstants } from "../constants/validation.const";

export class UserIdDto {
    @ApiProperty()
    @Type(() => Number)
    @IsInt()
    @IsPositive()
    @Max(ValidationConstants.INT_VALUE_MAX)
    user_id: number;
}