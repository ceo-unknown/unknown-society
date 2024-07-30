// db connection
import connectDb from "@/app/util/db";
// user model
import User from "@/app/util/models/user/User";
import { NextResponse } from "next/server";

// fetch all users
export async function GET() {
  connectDb();
  try {
    const users = await User.find();
    return NextResponse.json({ total_users: users.length });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
