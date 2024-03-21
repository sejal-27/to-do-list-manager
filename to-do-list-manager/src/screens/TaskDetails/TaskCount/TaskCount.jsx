
import React from "react";
import "./TaskCount.css";
import { taskDataLength } from "../TaskData";


const TaskCount = ({ openModal }) => {
  return (
    <div className="task-heading p-3 mt-3 flex align-middle gap-4">
      <div>
        You've got <span className="task-num">{taskDataLength()} tasks </span> today!{" "}
      </div>

      <button onClick={openModal}>
        <div className="bg-primary p-2 rounded-md addbtn flex">Add task</div>
      </button>
    </div>
  );
};

export default TaskCount;
