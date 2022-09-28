import jwt, { SignOptions } from 'jsonwebtoken';

export default class GenerateToken {
  private static algorithm = 'HS256';

  private static secret = 'المملكة العربية السعودية';

  public static generate(payload:object, time: number | string): string {
    const config:SignOptions = {
      algorithm: 'HS256',
      expiresIn: time,
    };
    
    return jwt.sign(payload, this.secret, config);
  }

  public static validate(token: string) {
    return jwt.verify(token, this.secret);
  }
}