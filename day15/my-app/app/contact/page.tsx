import { createInquiry } from "../lib/action";

export default function ContactPage() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Gui yeu cau ho tro</h1>
      <form action={createInquiry} className="flex flex-col gap-4">        <div>
        <label className="block">ten cua ban:</label>
        <input type="text"
          name="name"
          className="border p-2 w-full rounded text-black"
          required
        />
      </div>

        <div>
          <label className="block">email: </label>
          <input type="email"
            name="email"
            className="border p-2 w-full rounded text-black"
            required />
        </div>

        <button type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
          Gui di
        </button>
      </form>
    </div>
  );
}