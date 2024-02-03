import { Module } from '@nestjs/common';
import { UserController } from './Controller/User.controller';
import { UserService } from './Service/User.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule { }
