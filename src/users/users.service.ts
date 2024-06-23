import { Injectable } from '@nestjs/common';
import { databaseSchema } from 'src/database/database-schema';
import { DrizzleService } from 'src/database/drizzle.service';
import { uuidv7 } from 'uuidv7';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { eq } from 'drizzle-orm';

@Injectable()
export class UsersService {
  constructor(private readonly drizzleService: DrizzleService) {}
  async create(createUserDto: CreateUserDto) {
    return this.drizzleService.db
      .insert(databaseSchema.users)
      .values({ ...createUserDto, id: uuidv7() })
      .returning({ createdUser: databaseSchema.users.id });
  }

  async findAll({ role }: { role?: string }) {
    try {
      let query = this.drizzleService.db
        .select()
        .from(databaseSchema.users)
        .$dynamic();
      if (role) {
        query = query.where(eq(databaseSchema.users.role, role));
      }
      return query;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  findByEmail(email: string) {
    return this.drizzleService.db.query.users.findFirst({
      where: eq(databaseSchema.users.email, email),
    });
  }

  findOne(id: string) {
    return this.drizzleService.db.query.users.findFirst({
      where: eq(databaseSchema.users.id, id),
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.drizzleService.db
      .update(databaseSchema.users)
      .set(updateUserDto)
      .where(eq(databaseSchema.users.id, id));
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
