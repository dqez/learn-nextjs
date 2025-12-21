import { notFound } from "next/navigation";
import CommentForm from "../CommentForm";

interface Post {
  id: string;
  title: string;
  body: string;
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${(await params).slug}`, { next: { revalidate: 60 } })

  if (!response.ok) {
    throw new Error('Không thể lấy dữ liệu từ máy chủ');
  }

  const post: Post = await response.json();

  if (slug == '999') {
    console.warn(`[SERVER] Không tìm thấy bài viết có ID: ${slug}`)

    notFound();
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8 text-indigo-800">Bài viết {post.id}</h1>
      <div className="gap-6">
        <div key={post.id} className="border p-6 rounded-2xl shadow hover:shadow-xl transition bg-white">
          <h2 className="text-xl font-bold mb-3 capitalize text-gray-800">{post.title}</h2>
          <p className="text-gray-600 mb-4">{post.body}</p>
        </div>
      </div>
      <CommentForm />
    </div>
  );
}