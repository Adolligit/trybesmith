import { ResultSetHeader, FieldPacket, Pool } from 'mysql2/promise';

export default class OrderModel {
  private connection: Pool;
  
  public constructor(connection: Pool) { this.connection = connection; }

  public async all() {
    const query = `
      SELECT 
        o.id, 
        o.userId as 'userId', 
        JSON_ARRAYAGG(p.id) as 'productsIds'
      FROM Trybesmith.Orders as o
      RIGHT JOIN Trybesmith.Users as u ON u.id = o.userId
      LEFT JOIN Trybesmith.Products as p ON p.orderId = o.id
      GROUP BY o.id
      ORDER BY o.userId;
    `;

    const [result]: [ResultSetHeader, FieldPacket[]] = await this.connection.execute(query);

    return result;
  }

  public async create(userId:number, productsIds: Array<number>): Promise<object> {
    const insertQuery = 'INSERT INTO Trybesmith.Orders VALUES (null, ?)';
    const updateQuery = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';

    const [{ insertId: id }]: [ResultSetHeader, FieldPacket[]] = await this
      .connection.execute<ResultSetHeader>(insertQuery, [userId]);

    productsIds.forEach(async (productId) => {
      await this.connection.execute(updateQuery, [id, productId]);
    });

    return { userId, productsIds };
  }
}