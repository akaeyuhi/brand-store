import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Cart{
    @Prop({
        required: false,
        type: Array<MongooseSchema.Types.ObjectId>(),
        ref: 'Item'
    })
    items: string[];
}

export type CartDoc = Cart & Document;

export const CartSchema = SchemaFactory.createForClass(Cart);