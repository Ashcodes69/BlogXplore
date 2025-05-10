import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// url = http://localhost:3000/api/getblog?slug=how-to-learn-js

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const slug = url.searchParams.get("slug");

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), "BlogData", `${slug}.json`);
    const data = fs.readFileSync(filePath, "utf-8");
    
    return NextResponse.json(JSON.parse(data));
  } catch (err) {
    return NextResponse.json({ error: "Some error occurred" }, { status: 500 });
  }
}
