import connectDb from "@/app/util/db";
import User from "@/app/util/models/user/User";
import { NextResponse } from "next/server";

//  getting all users
export async function GET() {
  connectDb();
  const users = await User.find();

  return NextResponse.json({ userCount: users.length, users });
}
