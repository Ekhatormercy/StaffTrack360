import React, { useEffect } from "react";
import { useState } from "react";
// import "./Task.css";
import CreateTask from "../../../../Components/CreateTask";
import ListTask from "../../../../Components/ListTask";
import { Toaster } from "react-hot-toast";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Task = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(storedTasks ?? []); // Provide an empty array as the default value if storedTasks is falsy
  }, []);

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Toaster />
        <div className="  w-full h-full bg-slate-100 flex flex-col items-center pt-3 gap-16 ">
          <CreateTask tasks={tasks} setTasks={setTasks} />
          <ListTask tasks={tasks} setTasks={setTasks} />
        </div>
      </DndProvider>
    </>
  );
};

export default Task;
