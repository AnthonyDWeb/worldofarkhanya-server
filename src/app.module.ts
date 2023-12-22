import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CreationModule } from './creation/creation.module';
import { MulterModule } from '@nestjs/platform-express';


@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: 'src/.env',isGlobal: true}),
    MongooseModule.forRoot(process.env.MONGODB),
    JwtModule.register({ global: true,secret:process.env.JWT_SECRET_KEY, signOptions: { expiresIn: '30d' } }),
    MulterModule.register({
      dest:'./uploads',
    }),
    UsersModule,
    AuthModule,
    CreationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
