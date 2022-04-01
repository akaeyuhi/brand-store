import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Item, ItemDoc } from "../models/item.schema";
import { Model } from 'mongoose';
import { ItemInterface, UpdateItemInterface } from "src/items/interfaces";

@Injectable()
export class ItemsRepo{
    constructor(
        @InjectModel(Item.name)
        private readonly itemsModel: Model<ItemDoc>
    ){}

    async create(itemData: ItemInterface){
        return await this.itemsModel.create(itemData);
    }

    async delete(id: string){
        return await this.itemsModel.deleteOne({_id: id});
    }

    async getAll(){
        return await this.itemsModel.find({}, {name: 1, price: 1, discountPrice: 1});
    }

    async getById(id: string){
        return await this.itemsModel.findById(id);
    }

    async update(id: string, updateData: UpdateItemInterface){
        return await this.itemsModel.updateOne({_id: id}, updateData);
    }

    async getWithDiscount(){
        return await this.itemsModel.find({discountPrice: {$ne: null}});
    }
}