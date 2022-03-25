import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class Item{
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    description: string;

    // Assuming that finance transfer in store will be implemented
    // only within 1 currency
    @Prop({required: true})
    price: number;

    @Prop({
        type: Number,
        required: true,
        min: 1,
        max: 5
    })
    rating: number;
}

export type ItemDoc = Item & Document;

export const ItemSchema = SchemaFactory.createForClass(Item);