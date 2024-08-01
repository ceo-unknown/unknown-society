// login route

import connectDb from "@/app/util/db";
import User from "@/app/util/models/user/User";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request) {
  const body = await request.json();

  const { user_id, password } = body;

  //   checking the input values
  if (user_id.length === 0 && password.length === 0) {
    return NextResponse.json({ Error: "enter the given details." });
  }

  //   trimming the values
  const userTrim = user_id.trim();
  const passwordTrim = password.trim();

  //   calling the data base function
  connectDb();

  try {
    // finding the user in DB
    const userFound = await User.findOne({ user_id: userTrim });
    if (!userFound) {
      return NextResponse.json({ error: "user not found" }, { status: 404 });
    }
    if (passwordTrim !== userFound.password) {
      return NextResponse.json({ error: "incorrect password" });
    }

    const { user_id, _id } = userFound;

    //---
    //  generating JWT Token
    //---

    const token = jwt.sign({ user_id, _id }, process.env.SECRET_JWT);
    return NextResponse.json({
      message: "Logged success.",
      user: userFound,
      token,
    });
  } catch (error) {
    return NextResponse.json({
      error: `there was problem while logging ${error.message}`,
    });
  }
}
