import { useContext, useState } from "react";
import { TaskContext } from "./TaskContext";

const TaskInput = () => {

    const [text,setText]=useState("");

    const {addTask}=useContext(TaskContext);

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(text.trim() !==""){
            addTask(text);
            setText("")
        }

    }

    console.log(text)

  return (
    <form className="flex flex-col items-center " onSubmit={handleSubmit}>
      <div className="p-2 m-2 space-x-2 border">
        <input
          className="w-[400px] border-2 p-1 rounded-sm bg-sky-200 text-black border-black text-3xl"
          type="text"
          value={text}
          placeholder="Enter task"
          onChange={(e)=>setText(e.target.value)}
        />

        <button className="border-2 p-1 rounded-lg text-gray-900 bg-green-400 cursor-pointer border-black text-3xl " type="submit">Add Task</button>
      </div>
    </form>
  );
};

export default TaskInput;
