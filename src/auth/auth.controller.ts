import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';

@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}
  @Post('/register/user')
  async registerUser(@Body() registerUserDto: RegisterUserDto) {
    const hashedPassword = await bcrypt.hash(registerUserDto.password, 10);
    return this.usersService.create({
      ...registerUserDto,
      password: hashedPassword,
    });
  }
}
