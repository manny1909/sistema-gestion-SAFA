import express, { Application, Express, Router } from 'express';
import usersRouter from './users.routes';

const router: Router = express.Router();

function routeApi(app: Application): void {
  app.use('/api/v1/', router);
  router.use('/user', usersRouter);
}

export default routeApi;
