export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-100">
      <div className="animate-spin rounded-full h16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
      <p className="mt-4 text-indigo-600 font-semibold animate-pulse">
        Đang tải dữ liệu bài viết...
      </p>
    </div>
  )
}