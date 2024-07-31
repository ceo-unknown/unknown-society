import connectDb from "@/app/util/db";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function GET() {
  connectDb();

  return Response.json({ message: "first backend" });
}

export async function POST(request) {
  const body = await request.json();
  const { username, password } = body;

  // creating token
  const token = sign({ username, password }, process.env.SECRET_JWT, {
    expiresIn: "1h",
  });

  console.log(body);
  return NextResponse.json({
    message: "this is dummy end point",
    body,
    token,
  });
}
