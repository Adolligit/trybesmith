import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

export default class OrderController {
  private static orderService: OrderService = new OrderService();

  public static all = async (req: Request, res: Response) => {
    const orders = await this.orderService.all();
  
    return res.status(200).json(orders);
  };
}