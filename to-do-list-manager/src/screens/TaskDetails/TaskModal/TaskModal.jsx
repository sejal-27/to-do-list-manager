import React from "react";
import { useState } from "react";
import taskData, { addTasks } from "../TaskData";
import "../TaskModal/TaskModal.css";

const TaskModal = ({ isOpen, onClose }) => {
  const [taskInputs, setTaskInputs] = useState([""]);

  const handleInputChange = (index, value) => {
    const updatedInputs = [...taskInputs];
    updatedInputs[index] = value;
    setTaskInputs(updatedInputs);
  };

  const addTaskInput = () => {
    setTaskInputs([...taskInputs, ""]);
  };

  const removeTaskInput = (index) => {
    const updatedInputs = [...taskInputs];
    updatedInputs.splice(index, 1);
    setTaskInputs(updatedInputs);
  };

  const handleSubmit = () => {
    addTasks(taskInputs);
    console.log("Task Input", taskInputs);
    console.log("Task Data:", taskData);

    onClose();
  };
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content flex justify-between align-middle add-task-heading">
          <div className=""> Add Tasks</div>
          <div>
            <span className="close" onClick={onClose}>
              &times;
            </span>
          </div>
        </div>
        <div className="edit">
          {taskInputs.map((input, index) => (
            <div key={index} className="task-input-container">
              <input
                type="text"
                value={input}
                onChange={(e) => handleInputChange(index, e.target.value)}
                placeholder={`Task ${index + 1}`}
              />

              <button
                onClick={() => removeTaskInput(index)}
                className="remove-task"
              >
                -
              </button>
            </div>
          ))}
          <button onClick={addTaskInput} className="add-task">
            +
          </button>
          <button onClick={handleSubmit} className="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default TaskModal;
