'use client';


import { sendComment } from "./actions";

export default function CommentForm() {
  return (
    <form action={async (formData) => { await sendComment(formData); }} className="mt-10 p-6 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-bold mb-4">Để lại bình luận</h3>
      <textarea name="message" className="w-full p-3 border rounded-md mb-3" placeholder="Viet gi do..." required></textarea>
      <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">Gui binh luan</button>
    </form>
  );
}