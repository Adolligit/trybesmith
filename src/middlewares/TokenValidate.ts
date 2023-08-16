import httpStatus from 'http-status';
import { NextFunction, Request, Response } from 'express';
import GenerateToken from '../utils/GenerateToken';

export default function TokenValidation(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  const token = (
    authorization?.includes('Bearer') 
      ? authorization.replace('Bearer', '').trim() 
      : authorization
  );

  console.log('-->', token);

  if (!token) {
    return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Token not found' });
  }

  try {
    const decode = GenerateToken.validate(token);

    console.log('decode', decode);

    res.locals.decode = decode;
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).json({ message: 'Invalid token' });
  }
  
  next();
}