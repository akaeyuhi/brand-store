import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Cart, CartDoc } from "../models/cart.schema";
import { Model } from 'mongoose';
import { CartItemInterface } from "src/carts/interfaces";

@Injectable()
export class CartsRepo{
    constructor(@InjectModel(Cart.name) private readonly cartsModel: Model<CartDoc>){}

    async create(){
        return await this.cartsModel.create({items: []});
    }

    async getById(cartId: string){
        return await this.cartsModel.findById(cartId);
    }

    async addToItems(cartId: string, item: CartItemInterface){
        return await this.cartsModel.updateOne(
            { _id: cartId },
            { $push: {items: item} }
        );
    }

    async deleteFromItems(cartId: string, item: CartItemInterface){
        return await this.cartsModel.updateOne(
            {_id: cartId},
            {$pull: {items: item}}
        );
    }

    async updateCount(cartId: string, itemId: string, newCount: number){
        return await this.cartsModel.updateOne(
            {_id: cartId, 'items.itemId': itemId},
            { $set: {'items.$.count': newCount}}
        );
    }
}