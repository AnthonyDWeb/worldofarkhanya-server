import { ObjectId } from 'mongoose';

export class UserDto {
  _id?: ObjectId;
  profileImage?: string;
  username: string;
  password: string;
  description?: string;
  creations?: {
    characters: [ObjectId];
    classes: [ObjectId];
    races: [ObjectId];
    stats: [ObjectId];
  };
}
