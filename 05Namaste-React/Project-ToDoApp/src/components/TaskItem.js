// TaskItem.js
import { useContext } from "react";
import { TaskContext } from "./TaskContext";

const TaskItem = ({ task }) => {
  const { toggleComplete, deleteTask } = useContext(TaskContext);

  return (
    <li className="flex justify-between items-center p-2 m-2 space-y-4 bg-white rounded shadow-md w-[560px]">
      <span
        onClick={() => toggleComplete(task.id)}
        className={`cursor-pointer text-2xl ${
          task.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {task.text}
      </span>
      <button
        onClick={() => deleteTask(task.id)}
        className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
