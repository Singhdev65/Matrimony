import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user.model";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { fname, lname, email, phone, password } = await request.json();

    const existingUserVerifiedByEmail = await UserModel.findOne({
      email,
      isVerified: true,
    });
  } catch (error) {
    console.error("Error registering user", error);
    return Response.json(
      { success: false, message: "Error Registering User" },
      { status: 500 }
    );
  }
}
