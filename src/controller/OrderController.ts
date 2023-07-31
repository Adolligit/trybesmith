import { Request, Response } from 'express';
import OrderService from '../services/OrderService';
import httpStatus from 'http-status';

export default class OrderController {
  private static orderService: OrderService = new OrderService();

  public static all = async (req: Request, res: Response) => {
    const orders = await this.orderService.all();
  
    return res.status(httpStatus.OK).json(orders);
  };

  public static create = async (req: Request, res: Response) => {
    const { productsIds } = req.body;
    const { decode } = res.locals;
    
    const result = await this.orderService.create(decode.id, productsIds);
    
    res.status(httpStatus.CREATED).json(result);
  };
}