export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-extrabold text-indigo-700">
        Chi tiết Bài viết
      </h1>

      <p className="mt-4 text-gray-700">
        Đang xem bài viết có ID là:
        <span className="font-mono bg-gray-200 p-1 rounded ml-2">
          {slug}
        </span>
      </p>

      <p className="mt-6 text-sm text-gray-500">
        Trong ứng dụng thực tế, chúng ta sẽ dùng ID này để gọi API lấy dữ liệu.
      </p>
    </div>
  );
}