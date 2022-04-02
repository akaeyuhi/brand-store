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

    async getAll(filter: {
        sex: 'male' | 'female', 
        categories: {$in: string[]}, 
        discountPrice: {$ne: null}}
    ){
        return await this.itemsModel.find(
            filter, 
            {name: 1, price: 1, discountPrice: 1, sex: 1, categories: 1}
        );
    }

    async getByCategory(categories: string[]){
        return await this.itemsModel.find(
            {categories: {$in: categories}},
            {name: 1, price: 1, discountPrice: 1, sex: 1, categories: 1}
        );
    }

    async getById(id: string){
        return await this.itemsModel.findById(id);
    }

    async getWithDiscount(){
        return await this.itemsModel.find(
            {discountPrice: {$ne: null}},
            {name: 1, price: 1, discountPrice: 1, sex: 1, categories: 1}
        );
    }

    async update(id: string, updateData: UpdateItemInterface){
        return await this.itemsModel.updateOne({_id: id}, updateData);
    }
}