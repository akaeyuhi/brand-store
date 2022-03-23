require('dotenv').config();
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from 'src/database/models/account.schema';
import { RefToken, RefTokenSchema } from 'src/database/models/refToken.schema';
import { AccountsRepo } from 'src/database/repository/accounts.repository';
import { RefTokensRepo } from 'src/database/repository/refTokens.repository';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.TOKEN_SECRET
        }),
        MongooseModule.forFeature([
            {name: Account.name, schema: AccountSchema},
            {name: RefToken.name, schema: RefTokenSchema}
        ])
    ],
    controllers: [AuthController],
    providers: [AuthService, AccountsRepo, RefTokensRepo]
})
export class AuthModule {}
