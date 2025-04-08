import { createContext, useState } from "react";


export const TaskContext=createContext();

export const TaskProvider=({children})=>{

    const [tasks,setTasks]=useState([]);

    const addTask=(text)=>{
        const newTask={id:Date.now(),text,completed:false}
        setTasks([...tasks,newTask])
    };

    const toggleComplete=(id)=>{
    setTasks(tasks.map((task)=>task.id===id?{...task,completed:!task.completed}:task))

    }   

    const deleteTask=(id)=>{
        setTasks(tasks.filter(task=>task.id!==id));
    }

    return (
        <TaskContext.Provider value={{tasks,addTask,toggleComplete,deleteTask}}>
            {children}
        </TaskContext.Provider>
    )
}