import { Request, Response } from 'express';
import Product from '../interfaces/IProduct';
import ProductService from '../services/ProductService';

export default class ProductController {
  private static productService: ProductService = new ProductService();

  public static create = async (req: Request, res: Response<Product | { message: string }>) => {
    const { name, amount } = req.body;
    const product: Product = { name, amount };

    const created:Product = await this.productService.create(product);

    if (!created) {
      return res.status(401).json({ message: 'Algum erro!' });
    }

    return res.status(201).json(created);
  };

  public static all = async (req: Request, res: Response) => {
    const products = await this.productService.all();
  
    return res.status(200).json(products);
  };
}