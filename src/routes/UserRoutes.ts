import express, { Express } from 'express';
import UserController from '../controller/UserController';

const user: Express = express();

user.post('/', UserController.create);
// user.get('/', UserController.all);

export default user;