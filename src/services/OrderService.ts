import connection from '../models/connection';
import OrderModel from '../models/OrderModel';

export default class OrderService {
  private orderModel: OrderModel;

  public constructor() { this.orderModel = new OrderModel(connection); }
  
  public all() {
    return this.orderModel.all();
  }

  public async create(userId: number, productsIds: Array<number>): Promise<object> {
    return this.orderModel.create(userId, productsIds);
  }
}
