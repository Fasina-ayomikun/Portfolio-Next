import { connectToDB } from "@/app/connect/connect";
import Project from "@/app/models/project";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectToDB();
    const project = await Project.findById(params.id);
    if (!project) {
      return NextResponse.json(
        { message: "project not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ project }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to get project" },
      { status: 500 }
    );
  }
};
