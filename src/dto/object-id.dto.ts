import { Matches } from "class-validator";
import { CommonErrorEnum } from "enums/common-message.enum";

export class ObjectIdDto {
    @Matches(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i, {
        message: CommonErrorEnum.REGEX_NOT_MATCH
    })
    id: string
}