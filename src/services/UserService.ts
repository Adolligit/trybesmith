import connection from '../models/connection';
import User from '../interfaces/IUser';
import UserModel from '../models/UserModel';
import GenerateToken from '../utils/GenerateToken';

export default class OrderService {
  private userModel: UserModel;

  public constructor() { this.userModel = new UserModel(connection); }

  public async create(user: User): Promise<string> {
    const created: User = await this.userModel.create(user);
    
    const generateToken = new GenerateToken('المملكة العربية السعودية', created, '1d');

    return generateToken.generate();
  }
  
  // public all() {
  //   return this.userModel.all();
  // }
}
