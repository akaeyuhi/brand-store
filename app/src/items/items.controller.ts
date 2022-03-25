import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Put, Req, Res, UploadedFile, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtGuard } from 'src/appGuards/jwt.guard';
import { JwtInterceptor } from 'src/appInterceptors/jwt.interceptor';
import { IdValidationPipe } from 'src/appPipes/id-validation.pipe';
import { ItemDto, UpdateItemDto } from './dto';
import { ItemsService } from './items.service';
import { Express, Response } from 'express';
import { ItemInterface } from './interfaces';
import { BodyParseInterceptor } from 'src/appInterceptors/bodyParse.interceptor';
import { createReadStream } from 'fs';

@UseGuards(JwtGuard)
@UseInterceptors(JwtInterceptor)
@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }

    @Post()
    @UseInterceptors(FileInterceptor('file'), BodyParseInterceptor)
    async createItem(@Body() body: ItemDto, @UploadedFile() file: Express.Multer.File) {
        if(!file) throw new BadRequestException('Missing File');

        const photo = await this.itemsService.uploadPhoto(file.filename);
        body.photo = photo._id.toString();

        return await this.itemsService.creatItem(body as ItemInterface);
    }

    @Delete(':id')
    @UsePipes(new IdValidationPipe())
    async deleteItem(@Param('id') id: string) {
        return await this.itemsService.deleteItem(id);
    }

    @Get()
    async getAllItems() {
        return await this.itemsService.getAllItems();
    }

    @Get(':id')
    @UsePipes(new IdValidationPipe())
    async getItemById(@Param('id') id: string) {
        return await this.itemsService.getItemById(id);
    }

    @Get(':id/photo')
    @UsePipes(new IdValidationPipe())
    async getItemPhoto(@Param('id') itemId: string, @Res() res: Response){
        const photoPath = await this.itemsService.getPhoto(itemId);
        const file = createReadStream(photoPath);

        file.pipe(res);
    }

    @Patch(':id')
    @UsePipes(new IdValidationPipe())
    @UseInterceptors(FileInterceptor('file'), BodyParseInterceptor)
    async updateItem(
        @Param('id') id: string,
        @Body() body: UpdateItemDto,
        @UploadedFile() file: Express.Multer.File
    ) {
        if(file) await this.itemsService.updateItemPhoto(id, file.filename);
        return await this.itemsService.updateItem(id, body);
    }
}
