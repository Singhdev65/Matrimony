import mongoose, { Schema, Document } from "mongoose";
import { Lifestyle } from "./lifeStyle.model";
import { UserRole } from "./userRoles.model";

export interface User extends Document {
  fname: string;
  lname: string;
  username: string;
  dob: string;
  password: string;
  verifyCode: string | undefined;
  verifyCodeExpiry: any;
  email: string;
  phone: string;
  city: string;
  state: string;
  country: string;
  religion: string;
  caste: string;
  isVerified: boolean;
  noOfSiblings: number;
  siblingsDescription: string;
  isGoogleLogin: boolean;
  maritalStatus: string;
  children: string;
  familyType: string;
  familyStatus: string;
  occupation: string;
  preferences: mongoose.Types.ObjectId;
  lifestyle: Lifestyle["_id"];
  roles: UserRole["_id"][];
}

const UserSchema: Schema = new Schema({
  fname: { type: String },
  lname: { type: String },
  username: { type: String, trim: true, unique: true },
  dob: { type: String },
  password: { type: String },
  verifyCode: { type: String },
  verifyCodeExpiry: { type: Date },
  email: { type: String, required: true, unique: true },
  phone: { type: String, trim: true },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  religion: { type: String },
  caste: { type: String },
  isVerified: { type: Boolean, default: false },
  noOfSiblings: { type: Number },
  siblingsDescription: { type: String },
  isGoogleLogin: { type: Boolean, default: false },
  maritalStatus: {
    type: String,
    enum: [
      "Never married",
      "Widowed",
      "Widower",
      "Divorced",
      "Awaiting divorce",
    ],
  },
  children: { type: String, enum: ["Yes", "No", "Not Applicable"] },
  familyType: { type: String, enum: ["Nuclear", "joint"] },
  familyStatus: {
    type: String,
    enum: [
      "middle class",
      "upper middle class",
      "lower middle class",
      "Affluent",
      "Rich",
    ],
  },
  occupation: {
    type: String,
    enum: [
      "Govt",
      "Private",
      "Business",
      "Self Employed",
      "Home maker / Not Working",
    ],
  },
  preferences: { type: mongoose.Types.ObjectId, ref: "Preferences" },
  lifestyle: { type: mongoose.Types.ObjectId, ref: "Lifestyle" },
  roles: [{ type: mongoose.Types.ObjectId, ref: "UserRole" }],
});

UserSchema.virtual("userRoles", {
  ref: "UserRole",
  localField: "_id",
  foreignField: "user_id",
  justOne: false,
  options: { match: { status: "Active" } },
});

UserSchema.set("toJSON", { virtuals: true });

// const UserModel = mongoose.model<User>("User", UserSchema);
const UserModel = mongoose.models.User || mongoose.model<User>("User", UserSchema);


export default UserModel;
