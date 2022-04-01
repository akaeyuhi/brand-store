import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Account, AccountDoc } from "../models/account.schema";
import { Model } from 'mongoose';
import { AccountInterface } from "src/accounts/interfaces/account.interface";

@Injectable()
export class AccountsRepo{
    constructor(
        @InjectModel(Account.name)
        private readonly accountsModel: Model<AccountDoc>
    ){}

    async get(accountData: AccountInterface){
        return await this.accountsModel.findOne(accountData);
    }

    async getById(id: string){
        return await this.accountsModel.findById(id);
    }

    async exists(email: string){
        return await this.accountsModel.exists({email});
    }

    async create(accountData: AccountInterface){
        return await this.accountsModel.create(accountData);
    }

    async delete(id: string){
        return await this.accountsModel.deleteOne({_id: id});
    }
}