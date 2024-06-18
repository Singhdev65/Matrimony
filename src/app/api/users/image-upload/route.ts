import dbConnect from "@/lib/dbConnect";
import { writeFile } from "fs/promises";
import path from "path";
import fs from "fs";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/options";
import { User } from "next-auth";

export async function POST(request: Request) {
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

    const formData = await request.formData();

    const files = formData.getAll("files");

    if (!files || files.length === 0) {
      return Response.json(
        { success: false, message: "No Files selected" },
        { status: 400 }
      );
    }

    const uploadDir = path.join(process.cwd(), "public", "uploads");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const uploadedFiles = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i] as File;

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = file.name.replace(/\s/g, "_");

      const imagePath = path.join(uploadDir, fileName);

      await writeFile(imagePath, buffer);

      const relativePath = path.join("/uploads", fileName);
      uploadedFiles.push(relativePath);
    }

    return Response.json(
      {
        success: true,
        message: "Files uploaded successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error uploading files:", error);
    return Response.json(
      { success: false, message: "Error uploading files" },
      { status: 500 }
    );
  }
}
