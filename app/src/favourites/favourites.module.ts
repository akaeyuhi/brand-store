require('dotenv').config();
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { Account, AccountSchema } from 'src/database/models/account.schema';
import { Favourites, FavouritesSchema } from 'src/database/models/favourites.schema';
import { AccountsRepo } from 'src/database/repository/accounts.repository';
import { FavouritesRepo } from 'src/database/repository/favourites.repository';
import { FavouritesController } from './favourites.controller';
import { FavouritesService } from './favourites.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Favourites.name, schema: FavouritesSchema},
      {name: Account.name, schema: AccountSchema}
    ]),
    JwtModule.register({
      secret: process.env.TOKEN_SECRET
    })
  ],
  controllers: [FavouritesController],
  providers: [FavouritesService, FavouritesRepo, AccountsRepo]
})
export class FavouritesModule {}
