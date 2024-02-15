import { Link } from "react-router-dom";
import Task from "./Task";
import DeletePopup from "./popups/DeletePopup";
import { useRef } from "react";

export default function AllTasks({ tasks }) {
  const dateFormat = (date) => {
    return date.split("-").reverse().join("-");
  };

  return (
    <>
      <main className="allTasks">
        <div className="taskHeading">
          <h1>🔥Task</h1>
          <Link to="/addTask">
            <button className="addTask">
              <img src="/icons/file.png" alt="file icon" />
              <span>Add New Task</span>
            </button>
          </Link>
        </div>
        {tasks.map((task) => (
          <Task
            key={task._id}
            title={task.title}
            description={task.description}
            date={dateFormat(task.due_date.split("T")[0])}
            id={task._id}
          />
        ))}
      </main>
    </>
  );
}
