import { ObjectId } from 'mongoose';

export class RaceDto {
  name: { type: String; required: true };
}

export class SpeciesDto {
  name: { type: String; required: true };
}
