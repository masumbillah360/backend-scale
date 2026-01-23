import { AppError } from "./error.middleware";

export class ValidationError extends AppError {
    constructor(message = 'Invalid request data') {
        super(message, 400);
    }
}
