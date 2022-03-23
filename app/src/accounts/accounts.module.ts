require('dotenv').config();
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountsRepo } from 'src/database/repository/accounts.repository';
import { Account, AccountSchema } from '../database/models/account.schema';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Account.name, schema: AccountSchema}]),
    JwtModule.register({
      secret: process.env.TOKEN_SECRET
    })
  ],
  providers: [AccountsService, AccountsRepo],
  controllers: [AccountsController]
})
export class AccountsModule {}
