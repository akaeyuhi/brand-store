import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { RefToken, RefTokenDoc } from "../models/refToken.schema";
import { Model } from 'mongoose';

@Injectable()
export class RefTokensRepo{
    constructor(@InjectModel(RefToken.name) private readonly refTokensModel: Model<RefTokenDoc>){}

    async create(refToken: string){
        return await this.refTokensModel.create({refToken});
    }

    async get(refToken: string){
        return await this.refTokensModel.findOne({refToken});
    }
}