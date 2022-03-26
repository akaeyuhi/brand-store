import { Injectable } from '@nestjs/common';
import { AccountsRepo } from 'src/database/repository/accounts.repository';
import { CartsRepo } from 'src/database/repository/carts.repository';

@Injectable()
export class CartsService {
    constructor(
        private readonly cartsRepo: CartsRepo,
        private readonly accountsRepo: AccountsRepo    
    ){}

    async addItem(itemId: string, userId: string){
        const { cart } = await this.accountsRepo.getById(userId);
        return await this.cartsRepo.addToItems(cart, itemId);
    }

    async deleteItem(itemId: string, userId: string){
        const { cart } = await this.accountsRepo.getById(userId);
        return await this.cartsRepo.deleteFromItems(cart, itemId);
    }
}
