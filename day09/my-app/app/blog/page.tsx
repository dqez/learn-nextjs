import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
}

const dummyPosts = [
  { id: 1, title: "Bài viết 1: Giới thiệu Next.js", excerpt: "Học về Server Components..." },
  { id: 2, title: "Bài viết 2: Tailwind CSS", excerpt: "Style ứng dụng nhanh chóng..." },
  { id: 3, title: "Bài viết 3: Dynamic Routing", excerpt: "Tạo trang chi tiết sản phẩm..." },
  { id: 4, title: "Bài viết 4: React Hook", excerpt: "Ôn tập kiến thức useEffect..." },
];

export default async function BlogListPage() {

  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');

  if (!response.ok) {
    throw new Error('Không thể lấy dữ liệu từ máy chủ');
  }

  const posts: Post[] = await response.json();

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8 text-indigo-800">Danh sách bài viết</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post => (
          <div key={post.id} className="border p-6 rounded-2xl shadow hover:shadow-xl transition bg-white">
            <h2 className="text-xl font-bold mb-3 capitalize text-gray-800">{post.title}</h2>
            <p className="text-gray-600 line-clamp-3 mb-4">{post.body}</p>
            <a href={`/blog/${post.id}`} className="text-indigo-600 font-medium hover:underline">Xem chi tiết</a>
          </div>
        )))}
      </div>
    </div>
  )
}