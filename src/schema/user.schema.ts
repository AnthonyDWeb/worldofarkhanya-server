import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  profileImage: { type: String },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  description: { type: String, default: 'une description...' },
  creations: {
    characters: [{ type: mongoose.Types.ObjectId, ref: 'Characters' }],
    classes: [{ type: mongoose.Types.ObjectId, ref: 'Classes' }],
    races: [{ type: mongoose.Types.ObjectId, ref: 'Races' }],
    stats: [{ type: mongoose.Types.ObjectId, ref: 'Stats' }],
  },
});
