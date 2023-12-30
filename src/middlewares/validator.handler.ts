import { Request, Response, NextFunction } from 'express';
import boom from '@hapi/boom';
import Joi from 'joi'; // Asegúrate de importar Joi o cualquier otro módulo de validación que estés utilizando

function validatorHandler(schema: Joi.ObjectSchema, property: string) {
  return (req: any, res: Response, next: NextFunction): void => {
    const data = req[property];
    const { error } = schema.validate(data);

    if (error) {
      next(boom.badRequest(error));
    } else {
      next();
    }
  };
}

export default validatorHandler;

