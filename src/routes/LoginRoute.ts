import express, { Express } from 'express';
import LoginController from '../controller/LoginController';
import LoginValidate from '../middlewares/LoginValidate';

const login: Express = express();

login.post('/', LoginValidate, LoginController.create);

export default login;