import mongoose, { Schema, Document } from "mongoose";

export interface Role extends Document {
  role_name: string;
  is_default?: number;
}

const RoleSchema: Schema<Role> = new Schema({
  role_name: {
    type: String,
    required: true,
  },
  is_default: {
    type: Number,
    default: 1,
  },
});

const RolesModel =
  (mongoose.models.Role as mongoose.Model<Role>) ||
  mongoose.model<Role>("Role", RoleSchema);

export default RolesModel;
