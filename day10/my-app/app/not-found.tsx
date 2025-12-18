import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-9xl font-black text-gray-200">404</h1>
      <p className="text-2xl font-bold text-gray-800 mt-4">Trang bạn tìm kiếm không tồn tại</p>
      <p className="text-gray-500 mt-2">Có vẻ như đường dẫn đã bị hỏng hoặc trang đã bị xóa.</p>
      <Link href="/" className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700">
        Quay lại trang chủ
      </Link>
    </div>
  );
}