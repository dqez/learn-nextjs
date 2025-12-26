'use client';

export default function UserForm() {
  const handleClientAction = async (formData: FormData) => {
    const name = formData.get('name');
    const email = formData.get('email');

    console.log('Dữ liệu thu thập được:', { name, email });

    alert(`Đã nhận dữ liệu của: ${name}.`);
  }

  return (
    <form action={handleClientAction}>
      <h2>Thêm người dùng mới</h2>
      <div>
        <label className="block text-sm font-semibold text-gray-700">Name</label>
        <input name="name" type="text" required className="w-full border p-2 rounded mt-1 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Nhập tên ..." />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700">Email</label>
        <input type="email" name="email" required className="w-full border p-2 rounded mt-1 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Nhập email ..." />
      </div>

      <button type="submit" className="bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition-colors shadow-md">Save</button>
    </form>
  )
}