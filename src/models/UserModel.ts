import { ResultSetHeader, FieldPacket, Pool } from 'mysql2/promise';
import User from '../interfaces/IUser';

export default class UserModel {
  private connection: Pool;
  
  public constructor(connection: Pool) { this.connection = connection; }

  public async create(user: User): Promise<User> {
    const { username, classe, level, password } = user;
    const query = 'INSERT INTO Trybesmith.Users VALUES (null, ?, ?, ?, ?)';

    const [result]: [ResultSetHeader, FieldPacket[]] = await this.connection
      .execute(query, [username, classe, level, password]);
    const { insertId } = result;

    return { id: insertId, ...user };
  }

  // public async all() {
  //   const query = 'SELECT * FROM Trybesmith.Products';

  //   const [result]: [ResultSetHeader, FieldPacket[]] = await this.connection.execute(query);

  //   return result;
  // }
}