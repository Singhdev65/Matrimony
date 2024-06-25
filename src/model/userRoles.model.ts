import mongoose, { Schema, Document } from "mongoose";

export interface UserRole extends Document {
  user_id: mongoose.Schema.Types.ObjectId;
  user_role: mongoose.Schema.Types.ObjectId;
  status: string;
}

const UserRoleSchema: Schema<UserRole> = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "UserModel",
  },
  user_role: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "RolesModel",
  },
  status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Active",
  },
});

const UserRolesModel =
  (mongoose.models.UserRole as mongoose.Model<UserRole>) ||
  mongoose.model<UserRole>("UserRole", UserRoleSchema);

export default UserRolesModel;
