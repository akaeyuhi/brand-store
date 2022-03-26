import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Account{
    @Prop({required: true})
    email: string;

    @Prop({required: true})
    password: string;

    @Prop({
        required: true,
        type: MongooseSchema.Types.ObjectId,
        ref: 'Cart'
    })
    cart: string;
}

export type AccountDoc = Account & Document;

export const AccountSchema = SchemaFactory.createForClass(Account);