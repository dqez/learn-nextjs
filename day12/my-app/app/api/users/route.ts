import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    message: "Welcome to API of Next.js",
    status: "success"
  };

  return NextResponse.json(data);
}