import { Link } from "react-router-dom";
import DeletePopup from "./popups/DeletePopup";
import { useRef } from "react";
import TaskPopup from "./popups/TaskPopup";

export default function Task({ title, description, date, id }) {
  const deleteRef = useRef();
  const viewOneItem = useRef();

  const modal = document.getElementById("modal");
  const viewOne = document.getElementById("viewOneModal");
  const deleteTask = () => {
    modal.classList.remove("show");
    deleteRef.current.showModal();
  };

  const viewOneTask = () => {
    viewOne.classList.remove("show");
    viewOneItem.current.showModal();
  };

  return (
    <>
      <div className="task">
        <div className="taskIcon">
          <img className="taskIconImg" src="/icons/task.png" alt="task icon" />
        </div>

        <div className="taskContent" onClick={viewOneTask}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="funtions">
          <div className="taskDate">
            <img
              className="taskDateImg"
              src="/icons/clock.png"
              alt="clock icon"
            />
            <span className="taskDateText">{date}</span>
          </div>
          <Link to={`/editTask/${id}`}>
            <button className="editButton">
              <img src="/icons/edit 1.png" alt="edit icon" />
            </button>
          </Link>

          <button className="deleteButton" onClick={deleteTask}>
            <img
              className="delete"
              src="./icons/delete 1.png"
              alt="delete icon"
            />
          </button>
        </div>
      </div>
      <DeletePopup refe={deleteRef} id={id} title={title} />
      <TaskPopup
        refe={viewOneItem}
        id={id}
        title={title}
        description={description}
        date={date}
      />
    </>
  );
}
