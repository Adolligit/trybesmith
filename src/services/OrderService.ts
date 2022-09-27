import connection from '../models/connection';
import OrderModel from '../models/OrderModel';

export default class OrderService {
  private orderModel: OrderModel;

  public constructor() { this.orderModel = new OrderModel(connection); }
  
  public async all() {
    // const result = await this.orderModel.all();    
    
    return this.orderModel.all();
  }
}
