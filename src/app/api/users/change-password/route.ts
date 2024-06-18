import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user.model";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import bcrypt from "bcryptjs";

export async function PATCH(request: Request) {
  await dbConnect();

  try {
    const session = await getServerSession(authOptions);
    const user = session?.user;
    if (!session || !session.user) {
      return Response.json(
        { success: false, message: "Not authenticated" },
        { status: 401 }
      );
    }

    const userId = user._id;
    const { oldPassword, newPassword } = await request.json();

    const currentUser = await UserModel.findOne({ _id: userId });

    if (!currentUser) {
      return Response.json(
        { success: false, message: "No user found with specified ID" },
        { status: 401 }
      );
    }

    const isPasswordCorrect = await bcrypt.compare(oldPassword, user.password);

    if (!isPasswordCorrect) {
      return Response.json(
        { success: false, message: "Current password doesnot match" },
        { status: 401 }
      );
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    const newUser = new UserModel({
      password: hashedNewPassword,
    });

    await newUser.save();

    return Response.json(
      { success: true, message: "Password successfully changed" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error verifying user:", error);
    return Response.json(
      { success: false, message: "Error verifying user" },
      { status: 500 }
    );
  }
}
