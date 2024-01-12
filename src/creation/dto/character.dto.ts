import { ObjectId } from 'mongoose';

export class CharacterDto {
  _id?: { type: ObjectId };
  name: { type: String; required: true };
}
