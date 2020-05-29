import { Router } from 'express';
import AppointmentRouter from './appointments.routes';
import UsersRouter from './users.routes';

const routes = Router();

routes.use('/appointments', AppointmentRouter);
routes.use('/users', UsersRouter);

export default routes;
