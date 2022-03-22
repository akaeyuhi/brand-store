import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class Account{
    @Prop({required: true})
    email: string;

    @Prop({required: true})
    password: string;
}

export type AccountDoc = Account & Document;

export const AccountSchema = SchemaFactory.createForClass(Account);