import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();

  return NextResponse.json({
    message: "post successfully created .",
    data: body,
  });
}
