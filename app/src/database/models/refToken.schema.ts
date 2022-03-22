import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class RefToken{
    @Prop()
    token: string;
}

export type RefTokenDoc = RefToken & Document;

export const RefTokenSchema = SchemaFactory.createForClass(RefToken);