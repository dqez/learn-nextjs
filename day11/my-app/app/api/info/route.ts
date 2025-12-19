import { NextResponse } from "next/server"
import { brotliDecompress } from "zlib";

export async function GET() {
  const data = {
    name: "Zeq",
    role: "Backend developer",
    skill: [".NET", "Database"]
  }

  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();

  //do something like, save to database,...
  console.log("Data received: ", body);

  return NextResponse.json({
    message: "Data received!",
    receivedData: body
  }, { status: 201 });

}