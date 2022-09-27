import express, { Express } from 'express';
import ProductController from '../controller/ProductController';
import ProductValidate from '../middlewares/ProductValidate';

const product: Express = express();

product.post('/', ProductValidate, ProductController.create);
product.get('/', ProductController.all);

export default product;