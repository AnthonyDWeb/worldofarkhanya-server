import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: 'src/config/.config.env',isGlobal: true}),
    MongooseModule.forRoot(process.env.MONGODB),
    JwtModule.register({ secret:process.env.JWT_SECRET_KEY, signOptions: { expiresIn: '30d' } }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
