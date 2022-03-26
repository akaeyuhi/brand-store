import { BadRequestException, Injectable } from '@nestjs/common';
import { AccountsRepo } from 'src/database/repository/accounts.repository';
import { CartsRepo } from 'src/database/repository/carts.repository';
import { AccountInterface } from './interfaces/account.interface';

@Injectable()
export class AccountsService {
    constructor(
        private readonly accountsRepo: AccountsRepo,
        private readonly cartsRepo: CartsRepo    
    ){}

    async createAccount(accountData: AccountInterface){
        const res = await this.accountsRepo.exists(accountData.email);
        if(res) throw new BadRequestException('EMAIL ALREADY IN USE');

        const {_id} = await this.cartsRepo.create();
        accountData.cart = _id;
        return await this.accountsRepo.create(accountData);
    }

    async deleteAccount(id: string){
        return await this.accountsRepo.delete(id);
    }
}