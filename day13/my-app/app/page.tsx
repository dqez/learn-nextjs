import { db } from "@/lib/db";
import UserForm from "./components/UserForm";

export default async function Home() {

  const users = await db.user.findMany();


  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Danh sách người dùng</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="p-4 border rounded shadow-sm">
            {user.name} - <span className="text-gray-500">{user.email}</span>
          </li>
        ))}
      </ul>
      {users.length === 0 && <p>Chưa có dữ liệu.</p>}
      <UserForm />
    </div>
  )
}
