import "./styles.css";
import React, { useState } from "react";

import Navbar from "./components/NavBar/NavBar";
import TaskList from "./components/TaskList/TaskList";
let countid = 0;
const GenerateId = () => {
  countid = countid + 1;
  return countid;
};
export default function App() {
  const [task, setTask] = useState([]);

  const AddTask = (title, state) => {
    let newTask = {
      id: GenerateId(),
      title,
      state
    };
    setTask((val) => {
      return [...val, newTask];
    });
    console.log(task);
  };

  return (
    <div className="App bg-dark bg-opacity-75">
      <Navbar></Navbar>
      <div className="conteiner">
        <div className="row p-2 gx-5">
          <TaskList title="Pendentes" newtask={AddTask} task={task}></TaskList>
          <TaskList
            title="Em processo"
            newtask={AddTask}
            task={task}
          ></TaskList>
          <TaskList title="Finalizado" newtask={AddTask} task={task}></TaskList>
        </div>
      </div>
    </div>
  );
}
