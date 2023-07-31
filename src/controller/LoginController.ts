import { Request, Response } from 'express';
import Login from '../interfaces/ILogin';
import LoginServer from '../services/LoginService';
import httpStatus from 'http-status';

export default class LoginController {
  private static loginService: LoginServer = new LoginServer();

  public static create = async (req: Request, res: Response) => {
    const { username, password } = req.body as Login;
    
    const token = await this.loginService.create({ username, password });

    if (!token) {
      return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Username or password invalid' });
    }
  
    return res.status(httpStatus.OK).json({ token });
  };
}