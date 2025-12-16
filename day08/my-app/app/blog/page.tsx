// app/blog/page.tsx (Trang danh sách Blog)

import Link from "next/link";

const dummyPosts = [
  { id: 1, title: "Bài viết 1: Giới thiệu Next.js", excerpt: "Học về Server Components..." },
  { id: 2, title: "Bài viết 2: Tailwind CSS", excerpt: "Style ứng dụng nhanh chóng..." },
  { id: 3, title: "Bài viết 3: Dynamic Routing", excerpt: "Tạo trang chi tiết sản phẩm..." },
  { id: 4, title: "Bài viết 4: React Hook", excerpt: "Ôn tập kiến thức useEffect..." },
];

export default function BlogListPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>

      <div
        className="
          grid                    /* Bật chế độ Grid */
          grid-cols-1             /* Mặc định: 1 cột */
          gap-6                   /* Khoảng cách giữa các ô: 6 */
          md:grid-cols-2          /* Từ màn hình Medium trở lên: 2 cột */
          lg:grid-cols-3          /* Từ màn hình Large trở lên: 3 cột */
        "
      >
        {dummyPosts.map(post => (
          <div key={post.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
            <p className="mt-2 text-gray-600">{post.excerpt}</p>
            <Link href={`/blog/${post.id}`} className="mt-4 inline-block text-indigo-500 hover:text-indigo-700">
              Xem chi tiết →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}