import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema} from 'mongoose';

@Schema()
export class Favourites{
    @Prop({
        required: true,
        ref: 'Item',
        type: Array<MongooseSchema.Types.ObjectId>()
    })
    items: string[];
}

export type FavouritesDoc = Favourites & Document;

export const FavouritesSchema = SchemaFactory.createForClass(Favourites);