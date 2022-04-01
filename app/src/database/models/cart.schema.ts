import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Cart{
    @Prop({
        required: false,
        type: Array<{
            count: number,
            itemId: MongooseSchema.Types.ObjectId
        }>(),
        ref: 'Item'
    })
    items: {
        count: number,
        itemId: MongooseSchema.Types.ObjectId
    }[];
}

export type CartDoc = Cart & Document;

export const CartSchema = SchemaFactory.createForClass(Cart);