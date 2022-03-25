import { Injectable } from '@nestjs/common';
import { ItemsRepo } from 'src/database/repository/items.repository';
import { ItemInterface, UpdateItemInterface } from './interfaces';

@Injectable()
export class ItemsService {
    constructor(private readonly itemsRepo: ItemsRepo){}

    async creatItem(itemData: ItemInterface){
        return await this.itemsRepo.create(itemData);
    }

    async deleteItem(id: string){
        return await this.itemsRepo.delete(id);
    }

    async getAllItems(){
        return await this.itemsRepo.getAll();
    }

    async getItemById(id: string){
        return await this.itemsRepo.getById(id);
    }

    async updateItem(id: string, updateData: UpdateItemInterface){
        return await this.itemsRepo.update(id, updateData);
    }
}
