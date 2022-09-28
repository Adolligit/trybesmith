import express, { Express } from 'express';
import OrderController from '../controller/OrderController';
import OrderValidation from '../middlewares/OrderValidate';
import TokenValidation from '../middlewares/TokenValidate';

const order: Express = express();

order.get('/', OrderController.all);
order.post(
  '/',
  TokenValidation,
  OrderValidation,
  OrderController.create,
);

export default order;