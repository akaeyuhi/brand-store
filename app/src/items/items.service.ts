import { Injectable } from '@nestjs/common';
import { ItemsRepo } from 'src/database/repository/items.repository';
import { PhotosRepo } from 'src/database/repository/photos.repository';
import { ItemInterface, UpdateItemInterface } from './interfaces';
import { rm } from 'fs/promises';

@Injectable()
export class ItemsService {
    constructor(
        private readonly itemsRepo: ItemsRepo,
        private readonly photosRepo: PhotosRepo
    ){}

    async creatItem(itemData: ItemInterface){
        if(!itemData.discountPrice) itemData.discountPrice = null;
        return await this.itemsRepo.create(itemData);
    }

    async deleteItem(id: string){
        const photoId = await this.deletePhotoFile(id);
        await this.photosRepo.delete(photoId);

        return await this.itemsRepo.delete(id);
    }

    async getAllItems(sex: 'male' | 'female', categories: string[], discount: boolean){
        const filter = {sex, categories: {$in: categories}, discountPrice: {$ne: null}};

        if(!sex) delete filter.sex;
        if(!categories) delete filter.categories;
        if(!discount) delete filter.discountPrice;

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
        return await this.itemsRepo.update(id, updateData);
    }

    async uploadPhoto(fileName: string){
        return await this.photosRepo.create(fileName);
    }

    async updateItemPhoto(id: string, fileName: string){
        const photoId = await this.deletePhotoFile(id);
        return await this.photosRepo.update(photoId, fileName);
    }

    private async deletePhotoFile(itemId: string){
        const item = await this.getItemById(itemId);
        const oldPhoto = await this.photosRepo.get(item.photo);

        await rm('./src/database/photos/' + oldPhoto.fileName);
        return oldPhoto._id.toString();
    }
}
