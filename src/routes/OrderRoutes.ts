import express, { Express } from 'express';
import OrderController from '../controller/OrderController';

const order: Express = express();

order.get('/', OrderController.all);

export default order;