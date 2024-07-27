import { Body, Controller, Post, Get, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiCreatedResponse({
    example: {
      "email": "newuser@gmail.com",
      "password": "$2b$10$KZ.lZzJha110W9T.dvBkjOtdTDsWN.YZA1sMnINIUvXzaV09nnUzu",
      "_id": "66a53743ee671c624a328985",
      "__v": 0
    }
  })
  @Post('register')
  registerUser(@Body() userObject: RegisterAuthDto) {
    return this.authService.register(userObject);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    example: {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YTRlZTc0Yjg5ZDllYjY3Y2IxYTIyYyIsImlhdCI6MTcyMjEwMzQyOSwiZXhwIjoxNzIyMTA0NjI5fQ.NrsC9_GOJsJVEe9ATirqxPiMmG3dDZVvxQ9zsQF0-54",
      "user": {
        "_id": "66a4ee74b89d9eb67cb1a22c",
        "email": "andres@andres.com",
        "password": "$2b$10$Dre2oQd9Y8c.4egybIn8C.9WgoZgaESeHvyBH.u/HXigGzIv9PaNS",
        "__v": 0
      }
    }
  })
  @Post('login')
  loginUser(@Body() userObject: LoginAuthDto) {
    return this.authService.login(userObject);
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({
    example : {
      "_id": "66a4ee74b89d9eb67cb1a22c",
      "email": "andres@andres.com",
      "password": "$2b$10$Dre2oQd9Y8c.4egybIn8C.9WgoZgaESeHvyBH.u/HXigGzIv9PaNS",
      "__v": 0
    }
  })
  @UseGuards(JwtAuthGuard)
  @Get('current')
  getCurrentAuth(@Req() req: Request) {
    const token = req.headers['authorization']?.split(' ')[1];
    return this.authService.getCurrentAuth(token);
  }
}
