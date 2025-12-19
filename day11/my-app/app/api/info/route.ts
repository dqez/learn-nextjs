import { NextResponse } from "next/server"

export async function GET() {
  const data = {
    name: "Zeq",
    role: "Backend developer",
    skill: [".NET", "Database"]
  }

  return NextResponse.json(data);
}