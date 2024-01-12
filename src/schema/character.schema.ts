import * as mongoose from 'mongoose';

export const CharacterSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }
});