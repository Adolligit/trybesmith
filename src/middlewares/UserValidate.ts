import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import Joi, { ObjectSchema, ValidationResult } from 'joi';

const schema: ObjectSchema = Joi.object({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(8).required(),
});

export default function UserValidation(req: Request, res: Response, next: NextFunction) {
  const { error }: ValidationResult = schema.validate(req.body);
  
  if (error) {
    const { type } = error.details[0];
    
    const status: number = (type === 'any.required') ? httpStatus.BAD_REQUEST : httpStatus.UNPROCESSABLE_ENTITY;

    return res.status(status).json({ message: error.message });
  }
  
  next();
}