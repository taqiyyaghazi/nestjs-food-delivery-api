import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [UsersModule],
  providers: [],
  controllers: [AuthController],
})
export class AuthModule {}
