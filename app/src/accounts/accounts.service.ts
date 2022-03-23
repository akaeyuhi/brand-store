import { BadRequestException, Injectable } from '@nestjs/common';
import { AccountsRepo } from 'src/database/repository/accounts.repository';
import { AccountInterface } from './interfaces/account.interface';

@Injectable()
export class AccountsService {
    constructor(private readonly accountsRepo: AccountsRepo){}

    async createAccount(accountData: AccountInterface){
        const res = await this.accountsRepo.exists(accountData.email);

        if(res) throw new BadRequestException('EMAIL ALREADY IN USE');

        return await this.accountsRepo.create(accountData);
    }

    async deleteAccount(id: string){
        return await this.accountsRepo.delete(id);
    }
}