
class BaseSuccessResponse<T> {
    code: number;
    message: string;
    data: T | null;
    meta: any;
}

class BaseErrorResponse {
    code: number;
    message: string;
    meta?: any = {};
}

export class SuccessResponse<T> extends BaseSuccessResponse<T> {
    constructor(init: Partial<BaseSuccessResponse<T>>) {
        super();
        Object.assign(this, init);
    }
}

export class ErrorResponse extends BaseErrorResponse {
    constructor(init: BaseErrorResponse) {
        super();
        Object.assign(this, init);
    }
}