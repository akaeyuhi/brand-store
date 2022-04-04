import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RefTokensRepo } from './database/repository/refTokens.repository';

@Injectable()
export class AppService {
  constructor(
    private readonly refTokenRepo: RefTokensRepo,
    private readonly jwtService: JwtService
  ){}

  async refreshToken(oldToken: string, refToken: string) {
    const res = await this.refTokenRepo.get(refToken);
    if(!res) throw new BadRequestException('INCORRECT REFRESH TOKEN');

    const tokenData = this.jwtService.decode(oldToken);
    const token = this.jwtService.sign({id: tokenData['id']}, {expiresIn: '1h'});
    
    return token;
  }
}
