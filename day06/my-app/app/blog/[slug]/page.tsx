import { notFound } from "next/navigation";

export async function generateStaticParams() {

  const posts = [
    { slug: '1' },
    { slug: '2' },
    { slug: '3' },
  ];

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (slug == '999') {
    console.warn(`[SERVER] Không tìm thấy bài viết có ID: ${slug}`)

    notFound();
  }

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