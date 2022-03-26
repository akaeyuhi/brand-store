require('dotenv').config();
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AccountsModule } from './accounts/accounts.module';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { RefTokensRepo } from './database/repository/refTokens.repository';
import { RefToken, RefTokenSchema } from './database/models/refToken.schema';
import { ItemsModule } from './items/items.module';
import { CartsModule } from './carts/carts.module';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.TOKEN_SECRET
    }),
    AuthModule, 
    AccountsModule, 
    MongooseModule.forRoot('mongodb://localhost/store'),
    MongooseModule.forFeature([{name: RefToken.name, schema: RefTokenSchema}]),
    ItemsModule,
    CartsModule
  ],
  controllers: [AppController],
  providers: [AppService, RefTokensRepo],
})
export class AppModule {}