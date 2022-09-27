import express, { Express } from 'express';
import ProductController from '../controller/ProductController';

const product: Express = express();

product.post('/', ProductController.create);
product.get('/', ProductController.all);

export default product;