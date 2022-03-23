require('dotenv').config();
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AccountsModule } from './accounts/accounts.module';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.TOKEN_SECRET
    }),
    AuthModule, 
    AccountsModule, 
    MongooseModule.forRoot('mongodb://localhost/store')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}