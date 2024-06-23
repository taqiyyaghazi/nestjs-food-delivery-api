import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { DrizzleService } from 'src/database/drizzle.service';
import { databaseSchema } from 'src/database/database-schema';
import { uuidv7 } from 'uuidv7';

@Injectable()
export class ProductsService {
  constructor(private readonly drizzleService: DrizzleService) {}
  create(createProductDto: CreateProductDto) {
    return this.drizzleService.db
      .insert(databaseSchema.products)
      .values({ ...createProductDto, id: uuidv7() })
      .returning({ createdProduct: databaseSchema.products.id });
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
