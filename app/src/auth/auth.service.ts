import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountsRepo } from 'src/database/repository/accounts.repository';
import { RefTokensRepo } from 'src/database/repository/refTokens.repository';

@Injectable()
export class AuthService {
    constructor(
        private readonly accountsRepo: AccountsRepo,
        private readonly jwtService: JwtService,
        private readonly refTokensRepo: RefTokensRepo    
    ){}

    async postLogin(email: string, password: string){
        const res = await this.accountsRepo.get({email, password});
        if(!res) return 'INCORRECT USER DATA';
        
        const token = this.jwtService.sign({id: res._id.toString()}, {expiresIn: '1h'});
        const refToken = this.jwtService.sign({id: res._id.toString()});
        await this.refTokensRepo.create(refToken);

        return { token, refToken };
    }
}
