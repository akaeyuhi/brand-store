import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class Photo{
    @Prop({required: true})
    fileName: string;
}

export type PhotoDoc = Photo & Document;

export const PhotoSchema = SchemaFactory.createForClass(Photo);