import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user.model";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/options";
import { User } from "next-auth";

export async function PATCH(request: Request) {
  await dbConnect();

  try {
    const session = await getServerSession(authOptions);
    const user: User = session?.user;
    if (!session || !session.user) {
      return Response.json(
        { success: false, message: "Not authenticated" },
        { status: 401 }
      );
    }

    const {
      password,
      fname,
      lname,
      dob,
      email,
      phone,
      city,
      state,
      country,
      religion,
      caste,
      noOfSiblings,
      siblingsDescription,
      foodHabit,
      drink,
      smoke,
      motherTongue,
      languageKnown,
      maritalStatus,
      children,
      familyType,
      familyStatus,
      occupation,
    } = await request.json();

    if (password) {
      return Response.json(
        {
          success: false,
          message: "Please do not try to update password with this route",
        },
        { status: 400 }
      );
    }

    const userId = user._id;

    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      {
        fname,
        lname,
        dob,
        email,
        phone,
        city,
        state,
        country,
        religion,
        caste,
        noOfSiblings,
        siblingsDescription,
        foodHabit,
        drink,
        smoke,
        motherTongue,
        languageKnown,
        maritalStatus,
        children,
        familyType,
        familyStatus,
        occupation,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedUser) {
      return Response.json(
        {
          success: false,
          message: "Unable to find user to update message acceptance status",
        },
        { status: 404 }
      );
    }

    return Response.json(
      {
        success: true,
        message: "User updated successfully",
        updatedUser,
      },
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
