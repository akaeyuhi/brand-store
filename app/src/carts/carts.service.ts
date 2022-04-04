import { Injectable } from '@nestjs/common';
import { AccountsRepo } from 'src/database/repository/accounts.repository';
import { CartsRepo } from 'src/database/repository/carts.repository';

@Injectable()
export class CartsService {
    constructor(
        private readonly cartsRepo: CartsRepo,
        private readonly accountsRepo: AccountsRepo    
    ){}

    async addItem(itemId: string, count: number, userId: string){
        const { cart } = await this.accountsRepo.getById(userId);
        return await this.cartsRepo.addToItems(cart, {itemId, count});
    }

    async deleteItem(itemId: string, userId: string){
        const { cart } = await this.accountsRepo.getById(userId);
        const { items } = await this.cartsRepo.getById(cart);

        for(let item of items){
            if(item.itemId.toString() === itemId){
                return await this.cartsRepo.deleteFromItems(cart, item);        
            }
        }

        return 'NO ITEM IN CART WITH PROVIDED ID WAS FOUND';
    }

    async getCart(userId: string){
        const { cart } = await this.accountsRepo.getById(userId);
        return await this.cartsRepo.getById(cart);
    }

    async updateItemCount(itemId: string, newCount: number, userId: string){
        const { cart } = await this.accountsRepo.getById(userId);
        return await this.cartsRepo.updateCount(cart, itemId, newCount);
    }
}
