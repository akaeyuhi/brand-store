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
        const res = await this.accountsRepo.find({email, password});
    
        if(!res.length) return 'INCORRECT USER DATA';
        
        const token = this.jwtService.sign({id: res[0]._id}, {expiresIn: '1h'});
        const refToken = this.jwtService.sign({id: res[0]._id});
    
        const r = await this.refTokensRepo.create(refToken);
        console.log(r);
        return { token, refToken };
    }
}
