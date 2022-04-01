import { BadRequestException, Injectable } from '@nestjs/common';
import { AccountsRepo } from 'src/database/repository/accounts.repository';
import { CartsRepo } from 'src/database/repository/carts.repository';
import { FavouritesRepo } from 'src/database/repository/favourites.repository';
import { AccountInterface } from './interfaces/account.interface';

@Injectable()
export class AccountsService {
    constructor(
        private readonly accountsRepo: AccountsRepo,
        private readonly cartsRepo: CartsRepo,
        private readonly favouritesRepo: FavouritesRepo
    ){}

    async createAccount(accountData: AccountInterface){
        const res = await this.accountsRepo.exists(accountData.email);
        if(res) throw new BadRequestException('EMAIL ALREADY IN USE');

        const {_id: cartId} = await this.cartsRepo.create();
        const {_id: favId} = await this.favouritesRepo.create();
        
        accountData.cart = cartId;
        accountData.favourites = favId;
        return await this.accountsRepo.create(accountData);
    }

    async deleteAccount(id: string){
        return await this.accountsRepo.delete(id);
    }
}