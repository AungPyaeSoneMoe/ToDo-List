import React from "react";
import { useState } from "react";

const Form = ({ submit }) => {
  const [useTasks, setUseTasks] = useState("");

  const submitFormHandle = () => {
    submit(useTasks);
    setUseTasks("");
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          <input
            value={useTasks}
            onChange={(e) => setUseTasks(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Enter tasks ..."
          />
        </div>
        <div className="col">
          <button
            type="button"
            onClick={() => submitFormHandle()}
            className="btn btn-success"
          >
            Add Tasks
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
