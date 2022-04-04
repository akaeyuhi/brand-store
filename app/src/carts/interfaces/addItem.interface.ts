import {Schema} from 'mongoose';

export interface CartItemInterface{
    count: number;
    itemId: Schema.Types.ObjectId | string;
}