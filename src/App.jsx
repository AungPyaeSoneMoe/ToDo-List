import React, { useEffect } from "react";
import "./components/List";
import List from "./components/List";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import { api } from "./api/apiResources";
import { useState } from "react";
import uuid from "react-uuid";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const FetctData = async () => {
    const res = await api.get("/todolists");
    setTasks(res.data);
  };

  useEffect(() => {
    FetctData();
  }, [tasks]);

  const submit = async (useTasks) => {
    const data = {
      id: uuid(),
      tasks: useTasks,
      complete: false,
    };

    await api.post("/todolists", data);
  };

  const deleteTask = async (deleteId) => {
    await api.delete(`/todolists/${deleteId}`);
  };

  const updateCheck = async (id, complete) => {
    await api.patch(`/todolists/${id}`, { complete });
  };

  return (
    <div className=" mx-auto w-50 mt-5">
      <h1 className=" mb-3">React Todo Project</h1>
      <Form submit={submit} />
      <List tasks={tasks} deleteTask={deleteTask} updateCheck={updateCheck} />
    </div>
  );
};

export default App;
