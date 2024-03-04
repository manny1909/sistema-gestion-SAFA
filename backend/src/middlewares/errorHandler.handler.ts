import { Request, Response, NextFunction } from 'express';
import boom from '@hapi/boom';

function logErrors(error: any, req: Request, res: Response, next: NextFunction): void {
  console.error(error);
  next(error);
}

function errorHandler(error: any, req: Request, res: Response, next: NextFunction): void {
  console.log('pase por aca')
  if (boom.isBoom(error)) {
    res.status(error.output.statusCode).json(error.output.payload);
  } else {
    res.status(500).json({
      message: error.message,
      stack: error.stack,
    });
  }
}

export { logErrors, errorHandler };

