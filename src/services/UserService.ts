import connection from '../models/connection';
import User from '../interfaces/IUser';
import UserModel from '../models/UserModel';
import GenerateToken from '../utils/GenerateToken';

export default class OrderService {
  private userModel: UserModel;

  public constructor() { this.userModel = new UserModel(connection); }

  public async create(user: User): Promise<string> {
    const created: User = await this.userModel.create(user);    

    return GenerateToken.generate(created, '1d');
  }
}
