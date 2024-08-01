import connectDb from "@/app/util/db";
import User from "@/app/util/models/user/User";
import { NextResponse } from "next/server";
import { Next } from "react-bootstrap/esm/PageItem";

// Sign-in route

/**

Summary:
// -----

1. creating a user with user_id and password
2. can get the data from request body 
3. after getting the data verify the user_id and password
4. user_id should be unique ***
5. after getting the data redirect the user to "/login"

// -----
*/

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
    //   creating user in db

    const createdUser = await User.create({
      user_id: userTrim,
      password: passwordTrim,
    });
    return NextResponse.json({ createdUser });
    //   return NextResponse.redirect(new URL("/login", request.url));
  } catch (error) {
    return NextResponse.json(
      {
        error: "user already exits",
      },
      { status: 403 }
    );
  }
}
