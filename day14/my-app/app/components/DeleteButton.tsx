'use client';

import { useRouter } from "next/navigation";

export default function DeleteButton({ userId }: { userId: number }) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmDelete = confirm("R u sure?");
    if (!confirmDelete) return;

    const res = await fetch(`api/users/${userId}`, {
      method: "DELETE",
    })

    if (res.ok) {
      alert("Deleted");
      router.refresh();
    } else {
      alert("Co loi xay ra");
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-3 py-1 rounded"
    >delete</button>
  );
}