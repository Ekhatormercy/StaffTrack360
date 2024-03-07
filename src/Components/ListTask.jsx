import { useEffect, useState } from "react";
import toast from "react-hot-toast";
// import Section from "./Section";
import { useDrag, useDrop } from "react-dnd";

export default function ListTask({ setTasks, tasks }) {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [closed, setClosed] = useState([]);

  useEffect(() => {
    if (tasks) {
      const fTodos = tasks.filter((task) => task.status === "todo");
      const fInProgress = tasks.filter((task) => task.status === "inProgress");
      const fClosed = tasks.filter((task) => task.status === "closed");
      setTodos(fTodos);
      setInProgress(fInProgress);
      setClosed(fClosed);
    }
  }, [tasks]);

  //   console.log(todos);

  const status = ["todo", "inProgress", "closed"];

  return (
    <>
      <div className="flex gap-16">
        {status.map((status, index) => (
          <Section
            key={index}
            status={status}
            setTasks={setTasks}
            tasks={tasks}
            todos={todos}
            inProgress={inProgress}
            closed={closed}
          />
        ))}
      </div>
    </>
  );
}

const Section = ({ status, closed, todos, inProgress, setTasks, tasks }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  let text = "Todo";
  let bg = "bg-slate-500";
  let taskToMap = todos;

  if (status === "inProgress") {
    text = "In Progress";
    bg = "bg-purple-500";
    taskToMap = inProgress;
  }

  if (status === "closed") {
    text = "Closed";
    bg = "bg-green-500";
    taskToMap = closed;
  }

  const addItemToSection = (id) => {
    setTasks((prev) => {
      const mTasks = prev.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            status: status,
          };
        }
        return t;
      });
      localStorage.setItem("tasks", JSON.stringify(mTasks));
      toast.success("Task Status changed");
      return mTasks;
    });
  };

  return (
    <div
      ref={drop}
      className={`w-64 rounded-md p-2  ${isOver ? "bg-slate-200" : ""}  `}
    >
      <TaskHeader text={text} bg={bg} count={taskToMap?.length} />
      {taskToMap.length > 0 &&
        taskToMap.map((task) => (
          <Tasked key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
        ))}
    </div>
  );
};

const TaskHeader = ({ text, bg, count }) => {
  return (
    <div
      className={`${bg} flex rounded-md text-sm text-white uppercase   items-center h-12 pl-4  `}
    >
      {text}{" "}
      <div className="ml-3 bg-white w-7 h-7 rounded-full items-center flex justify-center text-black ">
        {count}
      </div>
    </div>
  );
};

const Tasked = ({ task, tasks, setTasks }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleRemove = (id) => {
    const fTasks = tasks.filter((t) => t.id !== id);
    localStorage.setItem("tasks", JSON.stringify(fTasks));
    setTasks(fTasks);

    toast.error("removed sucessfully");
  };
  return (
    <div
      ref={drag}
      className={`relative p-4 mt-8 shadow-md rounded-md ${
        isDragging ? "opacity-25" : " opacity-100"
      } cursor-grabbing`}
    >
      <p>{task.name}</p>
      <button
        className="absolute bottom-1 right-1 text-slate-400   "
        onClick={() => handleRemove(task.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </div>
  );
};
