import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schema/user.schema';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthModule } from 'src/auth/auth.module';
import { CharacterSchema } from 'src/schema/character.schema';
import { RaceSchema } from 'src/schema/race.schema';
import { ClassSchema } from 'src/schema/class.schema';
import { StatsSchema } from 'src/schema/stats.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Users', schema: UserSchema },
      { name: 'Characters', schema: CharacterSchema },
      { name: 'Classes', schema: ClassSchema },
      { name: 'Races', schema: RaceSchema },
      { name: 'Stats', schema: StatsSchema },
    ]),
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
  ],
  exports: [UsersService],
})
export class UsersModule {}
