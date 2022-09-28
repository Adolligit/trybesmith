import express, { Express } from 'express';
import ProductController from '../controller/ProductController';
import ProductValidation from '../middlewares/ProductValidate';

const product: Express = express();

product.post('/', ProductValidation, ProductController.create);
product.get('/', ProductController.all);

export default product;