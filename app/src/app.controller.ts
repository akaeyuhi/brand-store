import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TokensDto } from './appModuleDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('refresh')
  async refreshToken(@Body() body: TokensDto) {
    return await this.appService.refreshToken(body.token, body.refToken);
  }
}
