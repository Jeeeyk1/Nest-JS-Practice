import { HttpException, HttpStatus } from "@nestjs/common";

export class NotFoundException extends HttpException {
    constructor() {
        super("Not found exception ", HttpStatus.NOT_FOUND)
    }
}

export class InternalServerException extends HttpException {
    constructor() {
        super("Error encountered while processing request", HttpStatus.BAD_REQUEST)
    }

}

