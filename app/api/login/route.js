import connectDb from "@/app/util/db";
import User from "@/app/util/models/user/User";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// login route

/*

Summary:

//-----
not much

//-----

*/

export async function POST(request) {
  const { user_id, password } = await request.json();
  if (user_id.length === 0 && password.length === 0) {
    return NextResponse.json({ error: `please provide login credentials` });
  }

  try {
    await connectDb();

    const userFound = await User.findOne({ user_id });
    if (userFound) {
      // check the password
      if (password !== userFound.password) {
        return NextResponse.json({ error: `invalid login credentials` });
      }

      // if user found and password match generate JWT token
      const token = jwt.sign({ userId: userFound._id }, process.env.SECRET_JWT);
      return NextResponse.json({ success: `Login Success`, token });
    }
    if (!userFound) {
      return NextResponse.json({ error: `user not found` });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

// export async function POST(request) {
//   const body = await request.json();

//   const { user_id, password } = body;

//   if (!user_id || !password) {
//     return Response.json(
//       { error: "Please provide both user_id and password" },
//       { status: 400 }
//     );
//   }
//   const trimmedUser = user_id.trim();
//   const trimmedPassword = password.trim();
//   // Connect to database
//   await connectDb();

//   try {
//     // Find user by user_id
//     const userFound = await User.findOne({ user_id: trimmedUser });

//     if (userFound) {
//       // User found, check password

//       if (trimmedPassword !== userFound.password) {
//         return Response.json(
//           { error: "Incorrect login credentials" },
//           { status: 401 }
//         );
//       }

//       // Generate JWT token
//       const token = jwt.sign({ userId: userFound._id }, process.env.SECRET_JWT);
//       return Response.json({
//         message: "Logged in successfully",
//         user: userFound,
//         token,
//       });
//       // redirect the user to "/" or "/home"
//     } else {
//       // User not found, return an error instead of creating a new user
//       return Response.json({ error: "User not found" }, { status: 404 });
//     }
//   } catch (error) {
//     console.error(error);
//     return Response.json({ error: "An error occurred" }, { status: 500 });
//   }
// }
