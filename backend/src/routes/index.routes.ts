import express, { Application, Express, Router } from 'express';
import usersRouter from './user.routes';
import authRouter from './auth.routes';

const router: Router = express.Router();

function routeApi(app: Application): void {
  app.use('/api/v1/', router);
  router.use('/user', usersRouter);
  router.use('/auth', authRouter);
}

export default routeApi;
