import { NextFunction, Request, Response } from 'express';
import Joi, { ObjectSchema, ValidationResult } from 'joi';

const schema: ObjectSchema = Joi.object({
  name: Joi.string().min(3).required(),
  amount: Joi.string().min(3).required(),
});

export default function ProductValidate(req: Request, res: Response, next: NextFunction) {
  const { error }: ValidationResult = schema.validate(req.body);
  
  if (error) {
    const { type } = error.details[0];

    const status: number = (type === 'any.required') ? 400 : 422;

    return res.status(status).json({ message: error.message });
  }
  
  next();
}