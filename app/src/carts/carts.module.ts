require('dotenv').config();
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from 'src/database/models/account.schema';
import { Cart, CartSchema } from 'src/database/models/cart.schema';
import { AccountsRepo } from 'src/database/repository/accounts.repository';
import { CartsRepo } from 'src/database/repository/carts.repository';
import { CartsController } from './carts.controller';
import { CartsService } from './carts.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Cart.name, schema: CartSchema},
      {name: Account.name, schema: AccountSchema}
    ]),
    JwtModule.register({
      secret: process.env.TOKEN_SECRET
    })
  ],
  controllers: [CartsController],
  providers: [CartsService, CartsRepo, AccountsRepo]
})
export class CartsModule {}
