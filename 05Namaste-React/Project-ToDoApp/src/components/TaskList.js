// TaskList.js
import { useContext } from "react";
import { TaskContext } from "./TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <div className="mt-6 flex justify-center">
        <p className="bg-white text-gray-600 text-xl border border-gray-300 rounded-lg px-6 py-3 shadow-sm">
          No tasks yet ✨
        </p>
      </div>
    );
  }

  return (

    <ul className="flex flex-col items-center mt-6 space-y-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
