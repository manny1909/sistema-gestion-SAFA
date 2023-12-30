import { Request, Response, NextFunction } from 'express';
import boom from '@hapi/boom';
import { User } from '../interfaces/User';



function checkAdminRole(req: Request, res: Response, next: NextFunction): void {
  const user = req.user as User;

  if (user.roles.includes('admin')) {
    next();
  } else {
    next(boom.unauthorized());
  }
}

function checkRoles(...roles: string[]) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const user = req.user as User;
    const userRoles = user.roles.map(x => x.name); // Ajusta según la estructura real de tu usuario

    if (roles.some(item => userRoles.includes(item))) {
      next();
    } else {
      next(boom.unauthorized());
    }
  };
}

export { checkAdminRole, checkRoles };

