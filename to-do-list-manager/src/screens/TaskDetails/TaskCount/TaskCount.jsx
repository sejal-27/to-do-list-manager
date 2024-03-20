import React from "react";
import "./TaskCount.css";
import { useState } from "react";
import TaskModal from "../TaskModal/TaskModal";

const TaskCount = ({ taskCount }) => {
  const num = taskCount.length;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="task-heading p-3 mt-3 flex align-middle gap-4">
      <div>
        You've got <span className="task-num"> {num} tasks </span> today!{" "}
      </div>

      <button onClick={openModal}>
        <div className="bg-primary p-2 rounded-md addbtn flex">Add task</div>
      </button>
      <TaskModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};
export default TaskCount;
