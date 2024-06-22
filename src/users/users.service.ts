import { Injectable } from '@nestjs/common';
import { databaseSchema } from 'src/database/database-schema';
import { DrizzleService } from 'src/database/drizzle.service';
import { uuidv7 } from 'uuidv7';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly drizzleService: DrizzleService) {}
  async create(createUserDto: CreateUserDto) {
    return this.drizzleService.db
      .insert(databaseSchema.users)
      .values({ ...createUserDto, id: uuidv7() })
      .returning({ createdUser: databaseSchema.users.id });
  }

  async findAll() {
    const users = await this.drizzleService.db
      .select()
      .from(databaseSchema.users);
    return users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
