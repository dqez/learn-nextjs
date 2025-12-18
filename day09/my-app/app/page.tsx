import Link from "next/link";
import { ClientButton } from "./components/ClientButton";

export default function Home() {

  const serverGeneratedText = "From Server";
  return (
    <>
      <h2 className="text-2xl mt-8 mb-4">Danh sách Bài viết Demo</h2>
      <p>{serverGeneratedText}</p>
      <ul className="space-y-2">
        {/* Liên kết đến trang động */}
        <li>
          <Link href="/blog/bai-viet-so-1" className="text-blue-500 hover:underline">
            Bài viết số 1 (slug: bai-viet-so-1)
          </Link>
        </li>
        <li>
          <Link href="/blog/bai-viet-so-2" className="text-blue-500 hover:underline">
            Bài viết số 2 (slug: bai-viet-so-2)
          </Link>
        </li>
      </ul>
      <br />
      <ClientButton initialText="Click meeee"></ClientButton >

    </>
  );
}