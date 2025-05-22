import { NextResponse } from "next/server";
import fs from "fs";

// use URL : http://localhost:3000/api/postcontact

export async function POST(request: Request) {
  const body = await request.json();
  let data = await fs.promises.readdir("contactData");
  fs.writeFile(
    `contactData/${data.length + 1}.json`,
    JSON.stringify(body),
    () => {}
  );
  return NextResponse.json({
    success: true,
    message: "Data received successfully!",
    data: body,
  });
}
