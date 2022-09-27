import { Pool } from 'mysql2/promise';
import Login from '../interfaces/ILogin';
import User from '../interfaces/IUser';

export default class LoginModel {
  private connection: Pool;
  
  public constructor(connection: Pool) { this.connection = connection; }

  public async create(login: Login): Promise<User[]> {
    const { username, password } = login;

    const query = 'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?';

    const [result] = await this.connection.execute(query, [username, password]);

    return result as User[];
  }
}