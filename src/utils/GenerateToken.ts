import jwt, { SignOptions } from 'jsonwebtoken';

export default class GenerateToken {
  private algorithm = 'HS256';
  
  private payload: object;
  
  private secret: string;
  
  private time: number | string;

  public constructor(secret: string, payload: object, time: number | string) {
    this.secret = secret;
    this.payload = payload;
    this.time = time;
  }

  public generate(): string {
    const config:SignOptions = {
      algorithm: 'HS256',
      expiresIn: 32,
    };
    
    return jwt.sign(this.payload, this.secret, config);
  }
}