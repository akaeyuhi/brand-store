require('dotenv').config();
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { Item, ItemSchema } from 'src/database/models/item.schema';
import { Photo, PhotoSchema } from 'src/database/models/photo.schema';
import { ItemsRepo } from 'src/database/repository/items.repository';
import { PhotosRepo } from 'src/database/repository/photos.repository';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name: Item.name, schema: ItemSchema},
      {name: Photo.name, schema: PhotoSchema}
    ]),
    JwtModule.register({
      secret: process.env.TOKEN_SECRET
    }),
    MulterModule.register({
      dest: './src/database/photos'
    })
  ],
  controllers: [ItemsController],
  providers: [ItemsService, ItemsRepo, PhotosRepo]
})
export class ItemsModule {}
