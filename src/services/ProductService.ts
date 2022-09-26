import connection from '../models/connection';
import Product from '../interfaces/IProduct';
import ProductModel from '../models/ProductModel';

export default class ProductService {
  private productModel: ProductModel;

  public constructor() { this.productModel = new ProductModel(connection); }

  public async create(product: Product): Promise<Product> {
    const created: Product = await this.productModel.create(product);

    return created;
  }
}
