import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common'
import { CommonErrorEnum } from 'enums/common-message.enum'
import { ErrorResponse } from '../dto/response.dto'

@Catch()
export class ResponseErrorFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse()
        const status = exception.status
            ? exception.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR

        let message: string

        if (exception) {

            if (typeof exception.response === 'string') {
                message = exception.response
            } else if (typeof exception.response === 'object') {
                message = exception.response.message
            } else {
                console.error(exception)
            }

        } else {
            message = CommonErrorEnum.INTERNAL_SERVER
        }

        response
            .status(status)
            .json(
                new ErrorResponse({ 
                    code: status, 
                    message 
                })
            )
    }
}
