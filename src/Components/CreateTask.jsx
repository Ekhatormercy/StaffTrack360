import { useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
// import toast  from "react-hot-toast";

export default function CreateTask({ setTasks, tasks }) {
  const [task, setTask] = useState({
    id: "",
    name: "",
    status: "todo", // can also be inprogress or closed
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name.length < 3)
      return toast.error("Task must have more than three characters ");
    if (task.name.length > 100)
      return toast.error("Task must not be  more than 100 characters ");

    setTasks((prev) => {
      const list = [...prev, task];
      localStorage.setItem("tasks", JSON.stringify(list));
      return list;
    });

    toast.success("Task created sucessfully ");
    setTask({
      id: "",
      name: "",
      status: "todo",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task.name}
          className="border-2 border-slate-400  bg-slate-100  rounded mr-4 h-12 w-64 px-1 outline-none "
          onChange={(e) =>
            setTask({ ...task, id: uuidv4(), name: e.target.value })
          }
        />
        <button className="bg-cyan-500 rounded-md px-4 h-12 text-white ">
          Create
        </button>
      </form>
    </>
  );
}
