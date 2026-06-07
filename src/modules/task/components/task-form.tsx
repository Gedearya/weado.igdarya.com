export function TaskForm() {
  return (
    <div className="border border-gray-200 rounded-xl p-5 mt-4">
      <h2 className="font-bold mb-3">Add New Task</h2>

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          placeholder="Enter task title..."
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          readOnly
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          placeholder="Enter task description..."
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
          readOnly
        ></textarea>
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Category</label>
        <div className="flex gap-4 text-sm">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="category"
              value="indoor"
              defaultChecked
              readOnly
            />
            Indoor
          </label>
          <label className="flex items-center gap-1">
            <input type="radio" name="category" value="outdoor" readOnly />
            Outdoor
          </label>
        </div>
      </div>

      <button className="bg-sky-500 text-white rounded-lg px-4 py-1.5 text-sm font-medium">
        Add Task
      </button>
    </div>
  );
}
