import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

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
