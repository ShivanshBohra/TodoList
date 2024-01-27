import React, { useState } from "react";
import axios from "axios";
import './App.css';
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Create() {
  const [task, setTask] = useState("");
  const handleAdd = () => {
    if (!task.trim()) {
      toast.warn("Task cannot be blank!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      }); return;
    }

    axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => {
        location.reload();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error adding task!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      });
  };
  return (
    <div>
      <input
        className="create_form_input"
        type="text"
        placeholder="Enter Task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="create_form_button" type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default Create;
