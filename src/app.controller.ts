import { Controller, Get, Query, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { type Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('login-by-github')
  @UseGuards(AuthGuard('github'))
  getProfile(): string {
    return 'This is the profile page';
  }

  @Get('callback')
  @UseGuards(AuthGuard('github'))
  getCallback(@Query('code') code: string, @Req() req: Request) {
    console.log('User profile:', req.user);
    console.log('Authorization code:', code);
    return this.appService.findUserByGithubId(req.user!.id);
  }
}
