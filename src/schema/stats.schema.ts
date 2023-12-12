import * as mongoose from 'mongoose';

const StatsSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

const SubstatsSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }
});

export { StatsSchema, SubstatsSchema };
