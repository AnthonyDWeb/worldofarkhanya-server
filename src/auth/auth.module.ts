import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schema/user.schema';

@Module({
  imports: [UsersModule, PassportModule,MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }])],
  providers: [AuthService, LocalStrategy,JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}