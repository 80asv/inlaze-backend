import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUsers() {
    return this.usersService.getUsers();
  }

  @Get('/:id')
  async getUser(id: string) {
    return this.usersService.getUser(id);
  }

  @Post()
  async createUser(@Body() user: any) {
    return this.usersService.createUser(user);
  }
}
