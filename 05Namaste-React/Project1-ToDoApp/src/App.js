import React from "react";
import ReactDOM from "react-dom/client";
import { TaskProvider } from "./components/TaskContext";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
const App = () => {
  return (
    <TaskProvider>
      <div>
        <h1 className="text-center font-bold text-orange-500 m-4 text-3xl ">To-Do List App</h1>
        <TaskInput/>
        <TaskList/>
      </div>
    </TaskProvider>
  );
};

export default App;
