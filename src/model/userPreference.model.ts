import mongoose, { Schema, Document } from "mongoose";

export interface Preferences extends Document {
  user: mongoose.Types.ObjectId;
  gender: string;
  minAge: number;
  maxAge: number;
  religion: string;
  caste: string;
  horoscope: string;
  hobbies: string[];
  gotra: string;
  maritalStatus: string;
  motherTongue: string;
  color: string;
  minHeight: number;
  maxHeight: number;
}

const PreferencesSchema: Schema = new Schema({
  user: { type: mongoose.Types.ObjectId, ref: "User", unique: true },
  gender: { type: String },
  minAge: { type: Number },
  maxAge: { type: Number },
  religion: { type: String },
  caste: { type: String },
  horoscope: { type: String },
  hobbies: { type: [String] },
  gotra: { type: String },
  maritalStatus: { type: String },
  motherTongue: { type: String },
  color: { type: String },
  minHeight: { type: Number },
  maxHeight: { type: Number },
});

const PreferencesModel = mongoose.model<Preferences>(
  "Preferences",
  PreferencesSchema
);

export default PreferencesModel;
