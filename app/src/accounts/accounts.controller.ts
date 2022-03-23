import { Body, Controller, Delete, Param, Post, Req, Res, UseGuards, UseInterceptors } from '@nestjs/common';
import { Request, Response } from 'express';
import { JwtGuard } from 'src/appGuards/jwt.guard';
import { JwtInterceptor } from 'src/appInterceptors/jwt.interceptor';
import { AccountsService } from './accounts.service';
import { AccountDto } from './dto';

@Controller('accounts')
export class AccountsController {
    constructor(private readonly accountsService: AccountsService){}

    @Post()
    async createAccount(@Body() body: AccountDto, @Res() res: Response){
        console.log(await this.accountsService.createAccount(body));
        return res.redirect('/auth');
    }

    @Delete()
    @UseGuards(JwtGuard)
    @UseInterceptors(JwtInterceptor)
    async deleteAccount(@Req() req: Request){
        return await this.accountsService.deleteAccount(req.body.user.id);
    }
}
