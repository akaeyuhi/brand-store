import { Delete, Injectable, Post } from '@nestjs/common';
import { AccountsRepo } from 'src/database/repository/accounts.repository';
import { AccountInterface } from './interfaces/account.interface';

@Injectable()
export class AccountsService {
    constructor(private readonly accountsRepo: AccountsRepo){}

    @Post()
    async createAccount(accountData: AccountInterface){
        return await this.accountsRepo.create(accountData);
    }

    @Delete()
    async deleteAccount(){

    }
}