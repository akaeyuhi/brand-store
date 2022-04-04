require('dotenv').config();
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { Cart, CartSchema } from 'src/database/models/cart.schema';
import { Favourites, FavouritesSchema } from 'src/database/models/favourites.schema';
import { AccountsRepo } from 'src/database/repository/accounts.repository';
import { CartsRepo } from 'src/database/repository/carts.repository';
import { FavouritesRepo } from 'src/database/repository/favourites.repository';
import { Account, AccountSchema } from '../database/models/account.schema';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Account.name, schema: AccountSchema},
      {name: Cart.name, schema: CartSchema},
      {name: Favourites.name, schema: FavouritesSchema}
    ]),
    JwtModule.register({
      secret: process.env.TOKEN_SECRET
    })
  ],
  providers: [AccountsService, AccountsRepo, CartsRepo, FavouritesRepo],
  controllers: [AccountsController]
})
export class AccountsModule {}
