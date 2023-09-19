import React from "react";
import "./Form";
import Cart from "./Cart";

const List = ({ tasks, deleteTask, updateCheck }) => (
  <div>
    <ol className="list-group ">
      <Cart tasks={tasks} deleteTask={deleteTask} updateCheck={updateCheck} />
    </ol>
  </div>
);

export default List;
