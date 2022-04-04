import { Injectable } from '@nestjs/common';
import { ItemsRepo } from 'src/database/repository/items.repository';
import { PhotosRepo } from 'src/database/repository/photos.repository';
import { ItemInterface, UpdateItemInterface } from './interfaces';
import { rm } from 'fs/promises';

type Filter = {
    sex: 'male' | 'female',
    categories: {$in: string[]},
    discountPrice: {$ne: null}
};

@Injectable()
export class ItemsService {
    constructor(
        private readonly itemsRepo: ItemsRepo,
        private readonly photosRepo: PhotosRepo
    ){}

    async creatItem(itemData: ItemInterface){
        if(!itemData.discountPrice) itemData.discountPrice = null;
        if(itemData.categories){
            itemData.categories = itemData.categories.map(cat => cat.toLowerCase());
        }

        return await this.itemsRepo.create(itemData);
    }

    async uploadPhoto(fileName: string){
        return await this.photosRepo.create(fileName);
    }

    async getAllItems(sex: 'male' | 'female', categories: string[], discount: boolean){
        const filter: Filter = {} as Filter;

        if(sex) filter.sex = sex;
        if(discount) filter.discountPrice = {$ne: null};
        if(categories){
            filter.categories = {$in: categories.map(cat => cat.toLowerCase())};
        }

        return await this.itemsRepo.getAll(filter);
    }

    async getItemById(id: string){
        return await this.itemsRepo.getById(id);
    }

    async getPhoto(itemId: string){
        const { photo } = await this.getItemById(itemId);
        const { fileName } = await this.photosRepo.get(photo);
        
        return './src/database/photos/' + fileName;
    }

    async updateItem(id: string, updateData: UpdateItemInterface){
        if(updateData.categories){
            updateData.categories = updateData.categories.map(cat => cat.toLowerCase());
        }

        return await this.itemsRepo.update(id, updateData);
    }

    async updateItemPhoto(id: string, fileName: string){
        const photoId = await this.deletePhotoFile(id);
        return await this.photosRepo.update(photoId, fileName);
    }

    async deleteItem(id: string){
        const photoId = await this.deletePhotoFile(id);
        await this.photosRepo.delete(photoId);

        return await this.itemsRepo.delete(id);
    }

    private async deletePhotoFile(itemId: string){
        const item = await this.getItemById(itemId);
        const oldPhoto = await this.photosRepo.get(item.photo);

        await rm('./src/database/photos/' + oldPhoto.fileName);
        return oldPhoto._id.toString();
    }
}
