export class CreateUserDto {
  name: string;
  phone: string;
  email: string;
  password: string;
  restaurantName?: string;
  restaurantAddress?: string;
  latlong?: string;
  photo?: string;
  rememberToken?: string;
  role: string;
}
