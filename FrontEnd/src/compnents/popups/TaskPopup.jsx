import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { createPortal } from "react-dom";
import { useRef } from "react";
import DeletePopup from "./DeletePopup";
import { useNavigate } from "react-router-dom";

export default function TaskPopup({ title, description, date, id, refe }) {
  const viewOne = document.getElementById("viewOneModal");
  const navigate = useNavigate();
  const modal = document.getElementById("modal");
  const deleteRef = useRef();

  const deleteTask = () => {
    modal.classList.remove("show");
    console.log(deleteRef);
    deleteRef.current.showModal();
  };

  const cancelHandler = (refe) => {
    refe.current.close();
    viewOne.classList.add("show");
  };
  const editHandle = (id) => {
    viewOne.classList.add("show");
    navigate(`/editTask/${id}`);
  };

  return createPortal(
    <dialog className="task-popup" ref={refe}>
      <div className="popup-nav">
        <img src="./Vector.png" alt="" />
        <h2>{title}</h2>
        <button onClick={() => cancelHandler(refe)}>
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
      <hr />
      <div className="popup-content">
        <div className="popup-content-left">{description}</div>
        <div className="popup-content-right">
          <p>Due Date</p>
          <p className="btn-date">
            <img src="./Vector (1).png" alt="" />
            <span>{date}</span>
          </p>
          <hr className="hr" />
          <div onClick={() => editHandle(id)}>
            <button className="edit-btn-popup">
              <img src="./edit 1.png" className="imgs2" alt="" />
            </button>
            <span className="span1">Edit task</span>
          </div>
          <br />
          <hr className="hr" />
          <div onClick={deleteTask}>
            <button className="deleteButton">
              <img
                className="delete"
                src="./icons/delete 1.png"
                alt="delete icon"
              />
            </button>
            <span className="span1">Delete task</span>
          </div>

          <br />
          <hr className="hr" />
        </div>
      </div>
      <DeletePopup refe={deleteRef} id={id} title={title} />
    </dialog>,
    document.getElementById("viewOneModal")
  );
}
