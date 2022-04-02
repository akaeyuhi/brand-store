import { Body, Controller, Delete, Get, Param, Patch, Put, Req, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { JwtGuard } from 'src/appGuards/jwt.guard';
import { JwtInterceptor } from 'src/appInterceptors/jwt.interceptor';
import { IdValidationPipe } from 'src/appPipes/idValidation.pipe';
import { CartsService } from './carts.service';
import { CountDto } from './dto';

@UseGuards(JwtGuard)
@UseInterceptors(JwtInterceptor)
@Controller('carts')
export class CartsController {
    constructor(private readonly cartsService: CartsService){}

    @Put(':itemId')
    @UsePipes(new IdValidationPipe())
    async addItemToCart(@Param('itemId') itemId: string, @Body() body: CountDto, @Req() req: Request){
        return await this.cartsService.addItem(itemId, body.count, req.body.user.id);
    }

    @Delete(':itemId')
    @UsePipes(new IdValidationPipe())
    async removeItemFromCart(@Param('itemId') itemId: string, @Req() req: Request){
        return await this.cartsService.deleteItem(itemId, req.body.user.id);
    }

    @Get()
    async getCart(@Req() req: Request){
        return await this.cartsService.getCart(req.body.user.id);
    }

    @Patch(':itemId')
    @UsePipes(new IdValidationPipe())
    async updateItemCount(@Param('itemId') itemId: string, @Body() body: CountDto, @Req() req: Request){
        return await this.cartsService.updateItemCount(itemId, body.count, req.body.user.id);
    }
}
