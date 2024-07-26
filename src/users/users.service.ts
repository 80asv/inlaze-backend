import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users, UsersDocument } from './schemas/items.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(@InjectModel(Users.name) private usersModule: Model<UsersDocument>) {}

  async getUsers() {
    const users = await this.usersModule.find();
    return users;
  }

  async getUser(id: string) {
    const user = await this.usersModule.findById(id);
    return user;
  }

  async createUser(user: Users) {
    const newUser = await this.usersModule.create(user);
    return newUser;
  }
} 
