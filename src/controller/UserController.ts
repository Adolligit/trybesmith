import { Request, Response } from 'express';
import User from '../interfaces/IUser';
import UserService from '../services/UserService';
import httpStatus from 'http-status';

export default class UserController {
  private static userService: UserService = new UserService();

  public static create = async (req: Request, res: Response) => {
    const { username, classe, level, password } = req.body;

    const user: User = { username, classe, level, password };

    const token:string = await this.userService.create(user);

    return res.status(httpStatus.CREATED).json({ token });
  };

  // public static all = async (req: Request, res: Response) => {
  //   const users = await this.userService.all();
  
  //   return res.status(httpStatus.OK).json(users);
  // };
}