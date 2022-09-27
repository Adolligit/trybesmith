import express, { Express } from 'express';
import UserController from '../controller/UserController';
import UserValidation from '../middlewares/UserValidate';

const user: Express = express();

user.post('/', UserValidation, UserController.create);

export default user;