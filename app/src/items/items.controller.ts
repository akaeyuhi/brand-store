import { BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Query, Res, UploadedFile, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtGuard } from 'src/appGuards/jwt.guard';
import { JwtInterceptor } from 'src/appInterceptors/jwt.interceptor';
import { IdValidationPipe } from 'src/appPipes/idValidation.pipe';
import { CategoriesDto, ItemDto, UpdateItemDto } from './dto';
import { ItemsService } from './items.service';
import { Express, Response } from 'express';
import { ItemInterface } from './interfaces';
import { createReadStream } from 'fs';
import { QueryValidationPipe } from 'src/appPipes/queryValidation.pipe';

@UseGuards(JwtGuard)
@UseInterceptors(JwtInterceptor)
@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }

    @Post()
    async createItem(@Body() body: ItemDto) {
        return await this.itemsService.creatItem(body as ItemInterface);
    }

    @Post(':id/photo')
    @UseInterceptors(FileInterceptor('file'))
    @UsePipes(new IdValidationPipe())
    async postItemPhoto(@Param('id') itemId: string, @UploadedFile() file: Express.Multer.File){
        if(!file) throw new BadRequestException('Missing file');

        const photo = await this.itemsService.uploadPhoto(file.filename);
        return await this.itemsService.updateItem(itemId, {photo: photo._id.toString()});
    }

    @Get()
    @UsePipes(new QueryValidationPipe())
    async getAllItems(
        @Body() body: CategoriesDto,
        @Query() params: {sex: 'male' | 'female', discount: boolean}
    ) {
        return await this.itemsService.getAllItems(params.sex, body.categories, params.discount);
    }

    @Get(':id')
    @UsePipes(new IdValidationPipe())
    async getItemById(@Param('id') id: string) {
        return await this.itemsService.getItemById(id);
    }

    @Get(':id/photo')
    @UsePipes(new IdValidationPipe())
    async getItemPhoto(@Param('id') itemId: string, @Res() res: Response) {
        const photoPath = await this.itemsService.getPhoto(itemId);
        const file = createReadStream(photoPath);

        file.pipe(res);
    }

    @Patch(':id')
    @UsePipes(new IdValidationPipe())
    async updateItem(@Param('id') id: string, @Body() body: UpdateItemDto) {
        return await this.itemsService.updateItem(id, body);
    }

    @Patch(':id/photo')
    @UseInterceptors(FileInterceptor('file'))
    @UsePipes(new IdValidationPipe())
    async changeItemPhoto(@Param('id') itemId: string, @UploadedFile() file: Express.Multer.File){
        if(!file) throw new BadRequestException('Missing file');

        return await this.itemsService.updateItemPhoto(itemId, file.filename);
    }

    @Delete(':id')
    @UsePipes(new IdValidationPipe())
    async deleteItem(@Param('id') id: string) {
        return await this.itemsService.deleteItem(id);
    }
}
