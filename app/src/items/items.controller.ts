import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { JwtGuard } from 'src/appGuards/jwt.guard';
import { JwtInterceptor } from 'src/appInterceptors/jwt.interceptor';
import { ItemDto, UpdateItemDto } from './dto';
import { ItemsService } from './items.service';

@UseGuards(JwtGuard)
@UseInterceptors(JwtInterceptor)
@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService){}

    @Post()
    async createItem(@Body() body: ItemDto){
        return this.itemsService.creatItem(body);
    }

    @Delete(':id')
    async deleteItem(@Param('id') id: string){
        return this.itemsService.deleteItem(id);
    }

    @Get()
    async getAllItems(){
        return await this.itemsService.getAllItems();
    }

    @Get(':id')
    async getItemById(@Param('id') id: string){
        return await this.itemsService.getItemById(id);
    }

    @Patch(':id')
    async updateItem(@Param('id') id: string, @Body() body: UpdateItemDto){
        return await this.itemsService.updateItem(id, body);
    }
}
