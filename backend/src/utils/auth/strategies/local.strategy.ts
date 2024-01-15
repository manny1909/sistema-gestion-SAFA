import { Strategy, VerifyFunction } from 'passport-local';
import { AuthService } from '../../../services/auth.service';
import UserService from '../../../services/user.service';
import { User } from '../../../interfaces/User';

const _authService = new AuthService();
const _userService = new UserService();

const LocalStrategy = new Strategy(
  {
    // Desde aquí se puede modificar el nombre de 'username' por el nombre que quieras
    usernameField: 'email',
    passwordField: 'password',
  },
  async (username: string, password: string, done: (error: any, user?: any, options?: any) => void) => {
    try {
      if (!username || !password) {
        throw new Error('no data')
      }
      const user: User | null = await _userService.findByEmail(username)
      if (!user) {
        throw new Error('User not found')
      }
      const matchPassword = _authService.verifyPassword(password, user.password)
      if (!matchPassword) {
        throw new Error('Unauthorized')
      }
      done(null, user);
    } catch (error) {
      // Debe enviarse el error y false para indicar que algo salió mal
      done(error, false);
    }
  } // Ajusta según la versión específica de Passport que estés utilizando
);

export default LocalStrategy;

