import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user.model";
import { unstable_noStore as noStore } from "next/cache";

// to get single user
export const getUser = async (id: string) => {
  noStore();
  try {
    await dbConnect();
    const user = await UserModel.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

// to get all users for admin
export const getUsers = async () => {
  try {
    await dbConnect();
    const users = await UserModel.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
