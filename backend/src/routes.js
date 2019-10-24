import { Router } from 'express';
import multer from 'multer';
import MulterConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddlewere from './app/middleware/auth';
import FileController from './app/controllers/FileController';
import MeetupController from './app/controllers/MeetupController';
import SubscriptController from './app/controllers/SubscriptController';
import OrganizingController from './app/controllers/OrganizingController';
import NotificationController from './app/controllers/NotificationController';

const uploads = multer(MulterConfig);
const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddlewere);

routes.put('/users', UserController.update);

routes.post('/file', uploads.single('file'), FileController.store);

routes.get('/organizing', OrganizingController.index);
routes.get('/organizing/:id', OrganizingController.show);

routes.post('/meetup', MeetupController.store);
routes.get('/meetups', MeetupController.index);
routes.put('/meetup/:id', MeetupController.update);
routes.delete('/meetup/:id', MeetupController.delete);

routes.post('/subscription', SubscriptController.store);
routes.get('/subscription', SubscriptController.index);
routes.delete('/subscription/:id', SubscriptController.delete);

routes.get('/notification', NotificationController.index);
export default routes;
