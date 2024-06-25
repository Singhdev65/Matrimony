import dbConnect from "@/lib/dbConnect";
import RolesModel from "@/model/role.model";

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { role_name, is_default } = await request.json();
    const role = await RolesModel.findOne({ role_name: role_name });

    if (role) {
      return Response.json(
        {
          success: false,
          message: "Roles already exist",
        },
        { status: 400 }
      );
    }

    const newRoles = new RolesModel({
      role_name,
      is_default: +is_default,
    });

    await newRoles.save();

    return Response.json(
      {
        success: true,
        message: "User updated successfully",
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
