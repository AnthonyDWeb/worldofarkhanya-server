import * as mongoose from 'mongoose';

export const Schema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }
});