import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Get()
    getLogin(){

    }

    @Post()
    async postLogin(@Body() body: LoginDto){
        return await this.authService.postLogin(body.email, body.password);
    }
}
