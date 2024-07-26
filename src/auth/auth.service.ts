import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users, UsersDocument } from 'src/users/schemas/items.schema';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { hash, compare } from 'bcrypt';
import { LoginAuthDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(Users.name) private readonly userModel: Model<UsersDocument>){}

  async register(userObject: RegisterAuthDto) {
    const { password } = userObject ?? {};
    const plainToHash = await hash(password, 10);
    userObject = { ...userObject, password: plainToHash };
    return this.userModel.create(userObject);
  }

  async login(userObject: LoginAuthDto) {
    const findUser = await this.userModel.findOne({ email: userObject.email });
    if (!findUser) throw new HttpException('User not found', 404);
    
    const checkPassword = await compare(userObject.password, findUser.password);
    if(!checkPassword) throw new HttpException('Invalid credentials', 403);
    return findUser;
  }
}