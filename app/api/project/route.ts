import { connectToDB } from "@/app/connect/connect";
import Project from "@/app/models/project";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    await connectToDB();
    const projects = await Project.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ projects }, { status: 200 });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Failed to fetch all projects" },
      { status: 500 }
    );
  }
};
