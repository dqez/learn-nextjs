import { db } from "../lib/db";
import { createTask, deleteTask, toggleTaskStatus } from "../lib/action";

export default async function TasksPage() {
  const tasks = await db.task.findMany();

  return (
    <div className="p-8 bg-black min-h-screen text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column: Task List */}
        <div>
          <h1 className="text-2xl font-bold mb-6 text-white">Task List</h1>
          <ul className="grid gap-4">
            {tasks.map((task) => {
              const deleteAction = deleteTask.bind(null, task.id);
              const toggleAction = toggleTaskStatus.bind(
                null,
                task.id,
                task.completed,
              );

              return (
                <li
                  key={task.id}
                  className="flex items-center justify-between p-4 border border-zinc-800 rounded-lg shadow-sm bg-zinc-900"
                >
                  <form
                    action={toggleAction}
                    className="flex items-center gap-3"
                  >
                    <button
                      type="submit"
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <div
                        className={`h-5 w-5 rounded border flex items-center justify-center ${task.completed ? "bg-blue-600" : "border-zinc-700 bg-zinc-800"}`}
                      >
                        {task.completed && <span>✓</span>}
                      </div>

                      <span
                        className={
                          task.completed
                            ? "line-through text-zinc-500"
                            : "font-medium text-zinc-100"
                        }
                      >
                        {task.title}
                      </span>
                    </button>
                  </form>

                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs px-2 py-1 rounded-full border ${
                        task.completed
                          ? "bg-green-900/30 text-green-400 border-green-800/50"
                          : "bg-blue-900/30 text-blue-400 border-blue-800/50"
                      }`}
                    >
                      {task.completed ? "Done" : "To Do"}
                    </span>
                  </div>

                  <form action={deleteAction}>
                    <button
                      type="submit"
                      className="text-red-500 hover:text-red-400 p-1 hover:bg-red-900/20 rounded transition-colors"
                      title="Delete Task"
                    >
                      ✕
                    </button>
                  </form>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Column: Create Task Form */}
        <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 shadow-sm">
          <h1 className="text-2xl font-bold mb-6 text-white">Create Task</h1>
          <form action={createTask}>
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
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded font-medium transition-colors"
              >
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
