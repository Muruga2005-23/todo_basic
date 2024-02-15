import { addTask } from "./tasksSlice";

export const getAllData = () => async (dispatch) => {
  try {
    dispatch(addTask.loader());
    const response = await fetch("http://127.0.0.1:3000/api/tasks");
    const { data } = await response.json();
    dispatch(addTask.addTask(data));
  } catch (err) {
    console.log(err);
  }
};

export const createTask = async (data) => {
  try {
    await fetch("http://127.0.0.1:3000/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.log(err);
  }
};
export const getData = async (id) => {
  try {
    const response = await fetch(`http://127.0.0.1:3000/api/tasks/${id}`);
    const { data } = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const updateData = async (data) => {
  try {
    await fetch(`http://127.0.0.1:3000/api/tasks/${data._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        description: data.description,
        due_date: data.due_date,
      }),
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteData = async (data) => {
  try {
    await fetch(`http://127.0.0.1:3000/api/tasks/${data}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.log(err);
  }
};
