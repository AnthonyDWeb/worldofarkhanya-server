import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  profileImage: {type: String},
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  description: {type: String, default: "une description..."},
});