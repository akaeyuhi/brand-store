import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AccountsModule } from './accounts/accounts.module';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [AuthModule, AccountsModule, MongooseModule.forRoot('mongodb://localhost/store')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
