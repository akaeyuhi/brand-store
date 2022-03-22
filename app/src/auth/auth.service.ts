import { Injectable } from '@nestjs/common';
import { AccountsRepo } from 'src/database/repository/accounts.repository';

@Injectable()
export class AuthService {
    constructor(private readonly accountsRepo: AccountsRepo){}

    async postLogin(email: string, password: string){
        const res = await this.accountsRepo.find({email, password});

        
    }
}
