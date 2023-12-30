import { Request, Response, NextFunction } from 'express';
import { Error } from 'mongoose'; // Ajusta según la ubicación real de ValidationError en Mongoose

function ormErrorHandler(error: any, req: Request, res: Response, next: NextFunction): void {
  if (error instanceof Error.ValidationError) {
    res.status(409).json({
      status: 409,
      message: error.name,
      errors: error.errors,
    });
  }
  next(error);
}

export default ormErrorHandler;

