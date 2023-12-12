import * as mongoose from 'mongoose';

export const RaceSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }
});

export const SpeciesSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }
});
