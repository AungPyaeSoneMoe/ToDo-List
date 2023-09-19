import React from "react";

const Cart = ({ tasks, deleteTask, updateCheck }) => {
  const handleDeleteTask = (id) => {
    if (window.confirm("Are you sure")) {
      deleteTask(id);
    }
  };

  return (
    <div>
      {tasks.map((task) => {
        return (
          <div
            key={task.id}
            className={
              task.complete
                ? "list-group-item w-75 mt-3 text-white bg-success text-decoration-line-through"
                : "list-group-item w-75 mt-3  text-black"
            }
          >
            <div className="row">
              <div className="col-8 offset-1">
                <input
                  type="checkbox"
                  className="me-3"
                  onClick={() => updateCheck(task.id, !task.complete)}
                  checked={task.complete}
                />
                {task.tasks}
              </div>
              <div className="col-3 ">
                <i
                  className="fa-solid fa-trash"
                  onClick={() => handleDeleteTask(task.id)}
                ></i>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
