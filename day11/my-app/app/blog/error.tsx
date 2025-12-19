"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Lỗi hệ thống:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-6 bg-red-50 rounded-xl border border-red-200">
      <h2 className="text-2xl font-bold text-red-700 mb-4">Đã xảy ra lỗi ngoài ý muốn!</h2>
      <p className="text-gray-600 mb-6">{error.message || "Không thể tải dữ liệu bài viết."}</p>
      <button
        onClick={() => reset()} // Thử tải lại trang
        className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
      >
        Thử lại lần nữa
      </button>
    </div>
  );
}