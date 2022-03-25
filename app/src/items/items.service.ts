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
        return await this.itemsRepo.create(itemData);
    }

    async deleteItem(id: string){
        const photoId = await this.deletePhotoFile(id);
        await this.photosRepo.delete(photoId);

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

    async uploadPhoto(fileName: string){
        return await this.photosRepo.create(fileName);
    }

    async updateItemPhoto(id: string, fileName: string){
        const photoId = await this.deletePhotoFile(id);
        return await this.photosRepo.update(photoId, fileName);
    }

    async getPhoto(itemId: string){
        const { photo } = await this.getItemById(itemId);
        const { fileName } = await this.photosRepo.get(photo);
        
        return './src/database/photos/' + fileName;
    }

    private async deletePhotoFile(itemId: string){
        const item = await this.getItemById(itemId);
        const oldPhoto = await this.photosRepo.get(item.photo);

        await rm('./src/database/photos/' + oldPhoto.fileName);
        return oldPhoto._id.toString();
    }
}
