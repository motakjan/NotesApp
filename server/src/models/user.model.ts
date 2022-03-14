import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
    },
    confirmPassword: {
      type: String,
    },
    username: {
      type: String,
      default: '',
      unique: true,
    },
    name: {
      first: String,
      last: String,
    },
    profilePicture: {
      type: String,
      default: '',
    },
    todos: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true },
);

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;
