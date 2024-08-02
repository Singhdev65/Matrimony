import mongoose, { Schema, Document } from "mongoose";

export interface Lifestyle extends Document {
  smoke: boolean;
  drink: boolean;
  foodHabit: string;
  motherTongue: string;
  languageKnown: object;
}

const LifestyleSchema: Schema = new Schema({
  smoke: { type: Boolean, default: false },
  drink: { type: Boolean, default: false },
  foodHabit: { type: String },
  motherTongue: { type: String },
  languageKnown: { type: Object },
});

const LifestyleModel = mongoose.model<Lifestyle>("Lifestyle", LifestyleSchema);

export default LifestyleModel;
