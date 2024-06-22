import {
  BadRequestException,
  Body,
  Controller,
  NotFoundException,
  Param,
  Post,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FileInterceptor } from '@nestjs/platform-express';
import * as bcrypt from 'bcryptjs';
import { UsersService } from 'src/users/users.service';
import { AuthGuard } from './auth.guard';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  @Post('/register/:role')
  @UseInterceptors(FileInterceptor('photo'))
  async register(
    @Param('role') role: string,
    @Body() registerDto: RegisterDto,
    @UploadedFile() photo: Express.Multer.File,
  ) {
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);
    return this.usersService.create({
      ...registerDto,
      password: hashedPassword,
      role,
      photo: photo?.path,
    });
  }

  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.usersService.findByEmail(loginDto.email);

    if (!user) throw new NotFoundException('User not found');

    const isValidPassword = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (!isValidPassword)
      throw new BadRequestException('Password is incorrect');

    const payload = {
      id: user.id,
      role: user.role,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload),
      this.jwtService.signAsync(payload),
    ]);

    await this.usersService.update(user.id, { remember_token: refreshToken });

    return { accessToken, refreshToken };
  }

  @UseGuards(AuthGuard)
  @Post('/logout')
  async logout(@Request() req) {
    await this.usersService.update(req.user.id, { remember_token: null });
    return;
  }
}
