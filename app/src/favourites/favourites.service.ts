import { Injectable } from '@nestjs/common';
import { AccountsRepo } from 'src/database/repository/accounts.repository';
import { FavouritesRepo } from 'src/database/repository/favourites.repository';

@Injectable()
export class FavouritesService {
    constructor(
        private readonly accountsRepo: AccountsRepo,
        private readonly favouritesRepo: FavouritesRepo
    ){}

    async getFavourites(userId: string){
        const { favourites } = await this.accountsRepo.getById(userId);
        return await this.favouritesRepo.getById(favourites);
    }

    async addItem(itemId: string, userId: string){
        const { favourites } = await this.accountsRepo.getById(userId);
        return await this.favouritesRepo.addToItems(favourites, itemId);
    }

    async deleteItem(itemId: string, userId: string){
        const { favourites } = await this.accountsRepo.getById(userId);
        return await this.favouritesRepo.deleteFromItems(favourites, itemId);
    }
}
