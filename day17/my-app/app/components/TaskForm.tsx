"use client";

import { createTask, type FormState } from "../actions/actionTask";
import { useActionState } from "react";

const initialState: FormState = {
  message: "",
  errors: {},
};

export default function TaskForm() {
  const [state, dispatch] = useActionState(createTask, initialState);

  return (
    <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 shadow-sm">
      <h1 className="text-2xl font-bold mb-6 text-white">Create Task</h1>
      <form action={dispatch}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="title"
              className="text-sm font-semibold text-zinc-300"
            >
              Task Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Enter title"
              required
              className="border border-zinc-700 p-2 rounded bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-blue-500 placeholder-zinc-500"
            />
            {state?.errors?.title && (
              <p className="text-red-500 text-sm">{state.errors.title[0]}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded font-medium transition-colors"
          >
            Create Task
          </button>
          {state?.message && <p className="text-sm">{state.message}</p>}
        </div>
      </form>
    </div>
  );
}
