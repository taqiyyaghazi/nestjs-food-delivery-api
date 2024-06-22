import { RegisterUserDto } from './register-user.dto';

export class RegisterDriverDto extends RegisterUserDto {
  license_plate: string;
}
