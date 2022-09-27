import { Request, Response } from 'express';
import User from '../interfaces/IUser';
import UserService from '../services/ProductService';

export default class UserController {
  private static productService: UserService = new UserService();

  public static create = async (req: Request, res: Response<User | { message: string }>) => {
    const { name, amount } = req.body;
    const product: User = { name, amount };

    const created:User = await this.productService.create(product);

    if (!created) {
      return res.status(401).json({ message: 'Algum errro!' });
    }

    return res.status(201).json(created);
  };

  // public static all = async (req: Request, res: Response) => {
  //   const products = await this.productService.all();
  
  //   return res.status(200).json(products);
  // };
}