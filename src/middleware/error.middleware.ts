export class AppError extends Error {
    statusCode: number;
    isOperational: boolean;

    constructor(message: string, statusCode = 500) {
        super(message);

        this.statusCode = statusCode;
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}


import { Request, Response, NextFunction } from 'express';

export const globalErrorHandler = (
    err: Error | AppError,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    let statusCode = 500;
    let message = 'Something went wrong';

    if (err instanceof AppError) {
        statusCode = err.statusCode;
        message = err.message;
    }

    const isDev = process.env.NODE_ENV === 'development';

    res.status(statusCode).json({
        success: false,
        message,
        ...(isDev && {
            errors: err,
            stack: err.stack,
        }),
    });
};
