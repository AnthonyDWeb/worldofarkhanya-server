import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: 'src/.env',isGlobal: true}),
    MongooseModule.forRoot(process.env.MONGODB),
    JwtModule.register({ global: true,secret:process.env.JWT_SECRET_KEY, signOptions: { expiresIn: '30d' } }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
