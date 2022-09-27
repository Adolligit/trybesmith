import { NextFunction, Request, Response } from 'express';
import Joi, { ObjectSchema, ValidationResult } from 'joi';

const schema: ObjectSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export default function Loginvalidate(req: Request, res: Response, next: NextFunction) {
  const { error }: ValidationResult = schema.validate(req.body);

  if (error) return res.status(400).json({ message: error.message });
  
  next();
}