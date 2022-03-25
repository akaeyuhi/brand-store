require('dotenv').config();
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { Item, ItemSchema } from 'src/database/models/item.schema';
import { ItemsRepo } from 'src/database/repository/items.repository';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
  imports:[
    MongooseModule.forFeature([{name: Item.name, schema: ItemSchema}]),
    JwtModule.register({
      secret: process.env.TOKEN_SECRET
    })
  ],
  controllers: [ItemsController],
  providers: [ItemsService, ItemsRepo]
})
export class ItemsModule {}
