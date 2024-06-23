export class CreateProductDto {
  name: string;
  description?: string;
  price: number;
  stock: number;
  isAvailable: boolean;
  isFavorite: boolean;
  image: string;
  userId: string;
}
