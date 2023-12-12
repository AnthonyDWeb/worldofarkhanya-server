import * as mongoose from 'mongoose';

export const ClassSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});
