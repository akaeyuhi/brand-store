import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from 'src/database/models/account.schema';
import { AccountsRepo } from 'src/database/repository/accounts.repository';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports: [MongooseModule.forFeature([{name: Account.name, schema: AccountSchema}])],
    controllers: [AuthController],
    providers: [AuthService, AccountsRepo]
})
export class AuthModule {}
