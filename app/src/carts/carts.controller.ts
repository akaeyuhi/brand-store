import { Controller, Delete, Param, Patch, Req, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { JwtGuard } from 'src/appGuards/jwt.guard';
import { JwtInterceptor } from 'src/appInterceptors/jwt.interceptor';
import { IdValidationPipe } from 'src/appPipes/id-validation.pipe';
import { CartsService } from './carts.service';

@UseGuards(JwtGuard)
@UseInterceptors(JwtInterceptor)
@Controller('carts')
export class CartsController {
    constructor(private readonly cartsService: CartsService){}

    @Patch(':itemId')
    @UsePipes(new IdValidationPipe())
    async addItemToCart(@Param('itemId') itemId: string, @Req() req: Request){
        return await this.cartsService.addItem(itemId, req.body.user.id);
    }

    @Delete(':itemId')
    @UsePipes(new IdValidationPipe())
    async removeItemFromCart(@Param('itemId') itemId: string, @Req() req: Request){
        return await this.cartsService.deleteItem(itemId, req.body.user.id);
    }
}
