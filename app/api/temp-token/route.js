// db connection
import connectDb from "@/app/util/db";
// jsonwebtoken
import jwt from "jsonwebtoken";
// user model
import User from "@/app/util/models/user/User";

import { NextResponse } from "next/server";

// fetch all users
export async function GET() {
  connectDb();
  try {
    const users = await User.find();
    return NextResponse.json({ total_users: users.length, users });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}

// create user

export async function POST(request) {
  const { user_id, password, eToken } = await request.json();

  const token = jwt.sign({ user_id, password }, process.env.SECRET_JWT);

  connectDb();
  try {
    const userDetails = await User.create({
      user_id,
      password,
      eToken,
    });
    return NextResponse.json({ message: "user created..." });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}
