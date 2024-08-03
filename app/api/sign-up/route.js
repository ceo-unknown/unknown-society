import connectDb from "@/app/util/db";
import User from "@/app/util/models/user/User";
import { NextResponse } from "next/server";

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
  await connectDb();

  const { user_id, password } = await request.json();

  try {
    const userFound = await User.findOne({ user_id });
    if (userFound) {
      return NextResponse.json({ error: "User already exits please login" });
    } else {
      await User.create({
        user_id: user_id.trim(),
        password: password.trim(),
      });
    }
    return NextResponse.json({ success: "user created successfully." });
  } catch (error) {
    return NextResponse.json({ error: "User already taken" });
  }
}

// export async function POST(request) {
//   const body = await request.json();

//   const { user_id, password } = body;

//   //   checking the input values
//   if (user_id.length === 0 && password.length === 0) {
//     return NextResponse.json({ error: "enter the given details." });
//   }

//   //   trimming the values
//   const userTrim = user_id.trim();
//   const passwordTrim = password.trim();

//   //   calling the data base function
//   connectDb();

//   try {
//     //   creating user in db
//     // check the user is already exits db
//     const fondUser = await User.findOne({ user_id: userTrim });
//     if (fondUser) {
//       return NextResponse.json({ error: "User already Exits" });
//     }
//     await User.create({
//       user_id: userTrim,
//       password: passwordTrim,
//     });

//     return NextResponse.json({
//       success: "user created successfully",
//     });

//     //   return NextResponse.redirect(new URL("/login", request.url));
//   } catch (error) {
//     return NextResponse.json(
//       {
//         error: `there was something wrong while creating user ${error.message}user already exits`,
//       },
//       { status: 403 }
//     );
//   }
// }
