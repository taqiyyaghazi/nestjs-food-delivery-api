import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as bcrypt from 'bcryptjs';
import { UsersService } from 'src/users/users.service';
import { RegisterRestaurantDto } from './dto/register-restaurant.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { RegisterDriverDto } from './dto/register-driver.dto';

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
  @Post('/register/restaurant')
  @UseInterceptors(FileInterceptor('photo'))
  async registerRestaurant(
    @Body() registerRestaurantDto: RegisterRestaurantDto,
    @UploadedFile() photo: Express.Multer.File,
  ) {
    const hashedPassword = await bcrypt.hash(
      registerRestaurantDto.password,
      10,
    );
    return this.usersService.create({
      ...registerRestaurantDto,
      password: hashedPassword,
      photo: photo.path,
    });
  }

  @Post('/register/driver')
  @UseInterceptors(FileInterceptor('photo'))
  async registerDriver(
    @Body() registerDriverDto: RegisterDriverDto,
    @UploadedFile() photo: Express.Multer.File,
  ) {
    const hashedPassword = await bcrypt.hash(registerDriverDto.password, 10);
    return this.usersService.create({
      ...registerDriverDto,
      password: hashedPassword,
      photo: photo.path,
    });
  }
}
