import { Body, Controller, Delete, Param, Post, Req, Res, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { Response } from 'express';
import { JwtGuard } from 'src/appGuards/jwt.guard';
import { JwtInterceptor } from 'src/appInterceptors/jwt.interceptor';
import { IdValidationPipe } from 'src/appPipes/id-validation.pipe';
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

    @Delete(':id')
    @UseGuards(JwtGuard)
    @UseInterceptors(JwtInterceptor)
    @UsePipes(new IdValidationPipe())
    async deleteAccount(@Param('id') id: string){
        return await this.accountsService.deleteAccount(id);
    }
}
