import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Account, AccountDoc } from "../models/account.schema";
import { Model } from 'mongoose';
import { AccountInterface } from "src/accounts/interfaces/account.interface";

@Injectable()
export class AccountsRepo{
    constructor(@InjectModel(Account.name) private readonly accountsModel: Model<AccountDoc>){}

    async find(accountData: AccountInterface){
        return await this.accountsModel.find(accountData);
    }

    async create(accountData: AccountInterface){
        return await this.accountsModel.create(accountData);
    }
}