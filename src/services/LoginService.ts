import User from '../interfaces/IUser';
import Login from '../interfaces/ILogin';
import connection from '../models/connection';
import LoginModel from '../models/LoginModel';
import GenerateToken from '../utils/GenerateToken';

export default class LoginService {
  private loginModel: LoginModel;

  public constructor() { this.loginModel = new LoginModel(connection); }
  
  public async create(login: Login): Promise<string | void> {
    const user:User[] = await this.loginModel.create(login);
  
    if (user.length) {
      return GenerateToken.generate({ ...user[0] }, '1d');
    }
  }
}
