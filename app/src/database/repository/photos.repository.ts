import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Photo, PhotoDoc } from "../models/photo.schema";
import { Model } from 'mongoose';

@Injectable()
export class PhotosRepo{
    constructor(
        @InjectModel(Photo.name)
        private readonly photosModel: Model<PhotoDoc>
    ){}

    async create(fileName: string){
        return await this.photosModel.create({fileName});
    }

    async update(id: string, fileName: string){
        return await this.photosModel.updateOne({_id: id}, {fileName});
    }

    async delete(id: string){
        return await this.photosModel.deleteOne({_id: id});
    }

    async get(id: string){
        return await this.photosModel.findOne({_id: id});
    }
}