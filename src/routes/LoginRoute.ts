import express, { Express } from 'express';
import LoginController from '../controller/LoginController';
import LoginValidation from '../middlewares/LoginValidate';

const login: Express = express();

login.post('/', LoginValidation, LoginController.create);

export default login;