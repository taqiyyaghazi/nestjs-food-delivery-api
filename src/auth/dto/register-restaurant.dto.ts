import { RegisterUserDto } from './register-user.dto';

export class RegisterRestaurantDto extends RegisterUserDto {
  restaurant_name: string;
  restaurant_address: string;
  latlong: string;
  photo: string;
}
