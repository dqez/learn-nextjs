import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    await db.user.delete({
      where: { id: parseInt(id) },
    });

    return NextResponse.json(
      { message: "Xóa thành công" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Loi khi xoa" },
      { status: 500 }
    )
  }
}