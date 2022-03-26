import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Cart, CartDoc } from "../models/cart.schema";
import { Model } from 'mongoose';

@Injectable()
export class CartsRepo{
    constructor(@InjectModel(Cart.name) private readonly cartsModel: Model<CartDoc>){}

    async create(){
        return await this.cartsModel.create({items: []});
    }

    async addToItems(cartId: string, itemId: string){
        return await this.cartsModel.updateOne(
            { _id: cartId },
            { $push: {items: itemId} }
        );
    }

    async deleteFromItems(cartId: string, itemId: string){
        return await this.cartsModel.updateOne(
            {_id: cartId},
            {$pull: {items: itemId}}
        );
    }
}