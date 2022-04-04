import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Favourites, FavouritesDoc} from '../models/favourites.schema';
import { Model } from 'mongoose';

@Injectable()
export class FavouritesRepo{
    constructor(
        @InjectModel(Favourites.name)
        private readonly favouritesModel: Model<FavouritesDoc>
    ){}

    async getById(favId: string){
        return await this.favouritesModel.findById(favId);
    }

    async create(){
        return await this.favouritesModel.create({items: []});
    }

    async addToItems(favId: string, itemId: string){
        return await this.favouritesModel.updateOne(
            { _id: favId },
            { $push: {items: itemId} }
        );
    }

    async deleteFromItems(favId: string, itemId: string){
        return await this.favouritesModel.updateOne(
            { _id: favId},
            { $pull: {items: itemId}}
        );
    }
}