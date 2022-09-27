import { ResultSetHeader, FieldPacket, Pool } from 'mysql2/promise';
import Product from '../interfaces/IProduct';

export default class ProductModel {
  private connection: Pool;
  
  public constructor(connection: Pool) { this.connection = connection; }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products VALUES (null, ?, ?, null)';

    const [result]: [ResultSetHeader, FieldPacket[]] = await this.connection
      .execute(query, [name, amount]);
    const { insertId } = result;

    return { id: insertId, ...product };
  }

  public async all() {
    const query = 'SELECT * FROM Trybesmith.Products';

    const [result]: [ResultSetHeader, FieldPacket[]] = await this.connection.execute(query);

    return result;
  }
}