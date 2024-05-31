import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
  fname: string;
  lname: string;
  username: string;
  dob: String;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  email: string;
  phone: string;
  isVerified: boolean;
}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
  },
  fname: {
    type: String,
    required: [true, "First Name is required"],
  },
  lname: {
    type: String,
  },
  dob: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
      "Please use a valid email address",
    ],
  },
  phone: {
    type: String,
    required: [true, "Phone is required"],
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  verifyCode: {
    type: String,
    required: [true, "Verify Code is required"],
  },
  verifyCodeExpiry: {
    type: Date,
    required: [true, "Verify Code expiry is required"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
