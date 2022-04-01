import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { JwtGuard } from 'src/appGuards/jwt.guard';
import { JwtInterceptor } from 'src/appInterceptors/jwt.interceptor';
import { IdValidationPipe } from 'src/appPipes/id-validation.pipe';
import { FavouritesService } from './favourites.service';

@UseGuards(JwtGuard)
@UseInterceptors(JwtInterceptor)
@Controller('favourites')
export class FavouritesController {
    constructor(private readonly favouritesService: FavouritesService){}

    @Get()
    async getFaV(@Req() req: Request){
        return await this.favouritesService.getFavourites(req.body.user.id);
    }

    @Post(':itemId')
    @UsePipes(new IdValidationPipe())
    async adItemToFav(@Param('itemId') itemId: string, @Req() req: Request){
        return await this.favouritesService.addItem(itemId, req.body.user.id);
    }

    @Delete(':itemId')
    @UsePipes(new IdValidationPipe())
    async deleteFromFav(@Param('itemId') itemId: string, @Req() req: Request){
        return await this.favouritesService.deleteItem(itemId, req.body.user.id);
    }
}
