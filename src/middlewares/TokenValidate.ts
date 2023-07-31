import { NextFunction, Request, Response } from 'express';
import GenerateToken from '../utils/GenerateToken';
import httpStatus from 'http-status';

export default function TokenValidation(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Token not found' });

  try {
    const decode = GenerateToken.validate(authorization);

    res.locals.decode = decode;
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Invalid token' });
  }
  
  next();
}