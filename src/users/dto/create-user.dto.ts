export class CreateUserDto {
  name: string;
  phone: string;
  email: string;
  password: string;
  restaurant_name?: string;
  restaurant_address?: string;
  latlong?: string;
  photo?: string;
  remember_token?: string;
  role: string;
}
