import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/user.model";

export async function PUT(request: Request) {
  await dbConnect();

  try {
  } catch (error) {
    console.error("Error verifying user:", error);
    return Response.json(
      { success: false, message: "Error verifying user" },
      { status: 500 }
    );
  }
}
