import { Router } from 'express';
import AppointmentRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', AppointmentRouter);

routes.post('/users', (request, response) => {
	const { name, email } = request.body;

	const user = {
		name,
		email,
	};

	return response.json(user);
});

export default routes;
