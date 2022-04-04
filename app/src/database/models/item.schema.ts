import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from 'mongoose';

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

    @Prop({
        type: MongooseSchema.Types.ObjectId,
        ref: 'Photo',
        required: false
    })
    photo: string;

    @Prop({required: true})
    sex: string;

    @Prop({required: false})
    discountPrice: number;

    @Prop({required: false})
    categories: string[];
}

export type ItemDoc = Item & Document;

export const ItemSchema = SchemaFactory.createForClass(Item);