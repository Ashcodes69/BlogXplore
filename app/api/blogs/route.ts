import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const blogDir = path.join(process.cwd(), "BlogData");
    const files = fs.readdirSync(blogDir);

    // Optional: Read and parse each blog file
    const blogs = files.map((fileName) => {
      const filePath = path.join(blogDir, fileName);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(fileContent);
    });

    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read blog files" },
      { status: 500 }
    );
  }
}
