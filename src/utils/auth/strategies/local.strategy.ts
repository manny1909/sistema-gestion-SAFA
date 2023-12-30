import { Strategy, VerifyFunction } from 'passport-local';
import { AuthService } from '../../../services/auth.service';
import { Request } from 'express'; // Ajusta según la ubicación real del módulo 'express' en tu proyecto

const _authService = new AuthService();

const LocalStrategy = new Strategy(
  {
    // Desde aquí se puede modificar el nombre de 'username' por el nombre que quieras
    usernameField: 'email',
    passwordField: 'password',
  },
  async (username: string, password: string, done: (error: any, user?: any, options?: any) => void) => {
    try {
      const user = await _authService.findUser(username, password);
      done(null, user);
    } catch (error) {
      // Debe enviarse el error y false para indicar que algo salió mal
      done(error, false);
    }
  } // Ajusta según la versión específica de Passport que estés utilizando
);

export default LocalStrategy;

