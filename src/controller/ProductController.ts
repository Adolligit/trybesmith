import { Request, Response } from 'express';
import Product from '../interfaces/IProduct';
import ProductService from '../services/ProductService';

export default class ProductController {
  public static async create(req: Request, res: Response): Promise<Response<Product | string>> {
    const productService: ProductService = new ProductService();
    const { name, amount } = req.body;
    const product: Product = { name, amount };

    const created:Product = await productService.create(product);

    if (!created) {
      return res.status(401).json({ message: 'Algum errro!' });
    }

    return res.status(201).json(created);
  }
}