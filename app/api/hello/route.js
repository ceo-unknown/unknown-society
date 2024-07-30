import connectDb from "@/app/util/db";

export async function GET() {
  connectDb();
  return Response.json({ message: "first backend" });
}
