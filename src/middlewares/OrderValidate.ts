import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import Joi, { ObjectSchema, ValidationResult } from 'joi';

const schema: ObjectSchema = Joi.object({
  productsIds: Joi
    .array()
    .items(Joi.number().required())
    .required(),
});

export default function OrderValidation(req: Request, res: Response, next: NextFunction) {
  const { error }: ValidationResult = schema.validate(req.body);
  
  if (error) {
    const { type } = error.details[0];
    
    const status: number = (type === 'any.required') ? httpStatus.BAD_REQUEST : httpStatus.UNPROCESSABLE_ENTITY;

    // Essa condição ridícula para atender ao requisito da Trybe. :)
    if (type.includes('includesRequiredUnknowns')) {
      error.message = '"productsIds" must include only numbers';
    }
  
    return res.status(status).json({ message: error.message });
  }
  
  next();
}