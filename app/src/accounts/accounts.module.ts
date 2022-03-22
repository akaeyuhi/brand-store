import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountsRepo } from 'src/database/repository/accounts.repository';
import { Account, AccountSchema } from '../database/models/account.schema';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';

@Module({
  imports: [MongooseModule.forFeature([{name: Account.name, schema: AccountSchema}])],
  providers: [AccountsService, AccountsRepo],
  controllers: [AccountsController]
})
export class AccountsModule {}
