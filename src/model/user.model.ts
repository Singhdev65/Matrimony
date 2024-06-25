import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
  fname: string;
  lname: string;
  username: string;
  dob: String;
  password: string;
  verifyCode: string | undefined;
  verifyCodeExpiry: Date;
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
  smoke: boolean;
  drink: boolean;
  isGoogleLogin: boolean;
  foodHabit: string;
  motherTongue: string;
  languageKnown: object;
  maritalStatus: object;
  children: object;
  familyType: object;
  familyStatus: object;
  occupation: object;
}

const UserSchema: Schema<User> = new Schema(
  {
    username: {
      type: String,
      trim: true,
      unique: true,
    },
    fname: {
      type: String,
    },
    lname: {
      type: String,
    },
    dob: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    caste: {
      type: String,
    },
    religion: {
      type: String,
    },
    foodHabit: {
      type: String,
    },
    noOfSiblings: {
      type: Number,
    },
    siblingsDescription: {
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
      trim: true,
    },
    password: {
      type: String,
    },
    verifyCode: {
      type: String,
    },
    verifyCodeExpiry: {
      type: Date,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    smoke: {
      type: Boolean,
      default: false,
    },
    drink: {
      type: Boolean,
      default: false,
    },
    motherTongue: {
      type: String,
    },
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
    children: {
      type: String,
      enum: ["Yes", "No", "Not Applicable"],
    },
    familyType: {
      type: String,
      enum: ["Nuclear", "joint"],
    },
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
    role: {
      type: String,
      enum: ["Admin", "User", "Guest"],
      default: "Guest",
    },
    isGoogleLogin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
