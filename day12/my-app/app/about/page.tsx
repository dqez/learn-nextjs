import prismaDb from "@/lib/db";

export default async function AboutPage() {
  const users = await prismaDb.user.findMany();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">About us</h1>

      {/* Kiểm tra nếu không có user nào */}
      {users.length === 0 && <p>No users found.</p>}

      {users.map((u) => (
        <div key={u.id} className="border-b py-2">
          <h2 className="font-semibold">{u.name}</h2>
          <p className="text-gray-600">{u.email}</p>
        </div>
      ))}
    </div>
  );
}