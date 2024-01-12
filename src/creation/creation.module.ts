import { Module } from '@nestjs/common';
import { CreationService } from './creation.service';
import { CreationController } from './creation.controller';
import { MongooseModule } from '@nestjs/mongoose';
// -------------- SCHEMA -------------------------------------
import { UserSchema } from 'src/schema/user.schema';
import { RaceSchema } from 'src/schema/race.schema';
import { CharacterSchema } from 'src/schema/character.schema';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule,MongooseModule.forFeature([
    {name: 'Users', schema: UserSchema},
    { name: 'Characters', schema: CharacterSchema },
    { name: 'Classes', schema: RaceSchema },
    { name: 'Races', schema: RaceSchema },
    { name: 'Stats', schema: RaceSchema },
])],
  controllers: [CreationController],
  providers: [CreationService],
})
export class CreationModule {}
