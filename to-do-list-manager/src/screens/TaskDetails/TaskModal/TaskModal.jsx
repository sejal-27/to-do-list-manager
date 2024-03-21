import React from "react";
import { useState } from "react";
import "../TaskModal/TaskModal.css";
import AddTasks from "../TaskData";

const TaskModal = ({ isOpen, onClose }) => {
  const [taskInputs, setTaskInputs] = useState([""]);
  const [taskData, setTaskData] = useState([]);

  const handleInputChange = (index, value) => {
    // console.log(value, taskInputs, "console 1111");
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
    const newTasks = taskInputs.filter((task) => task.trim() !== "");
    console.log(newTasks, "newtask111");
    const updatedTaskData = AddTasks(newTasks);
    console.log(updatedTaskData, "updateddata111");
    setTaskData((currentTaskData) => [...currentTaskData, ...newTasks]);

    setTaskInputs([""]);
    onClose();
  };

  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal bg-white">
        <div className="modal-content flex justify-between align-middle add-task-heading">
          <div className=" font-semibold"> Add Tasks</div>
          <div>
            <button className="close" onClick={onClose}>
              &times;
            </button>
          </div>
        </div>
        <div className="">
          {taskInputs.map((input, index) => (
            <div key={index} className="task-input-container w-full flex justify-between p-2 m-1 gap-1">
              <input
                type="text"
                value={input}
                onChange={(e) => handleInputChange(index, e.target.value)}
                placeholder={`Task ${index + 1}`}
                className="w-full"
              />

              <button
                onClick={() => removeTaskInput(index)}
                className="remove-task" style={{fontSize:"2.5rem" , fontWeight:"400"}}
              >
                -
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center m-2">
            <div >
          <button onClick={addTaskInput} className="add-task text-primary">
            + Add Another Task
          </button>
          </div>
          <div>
          <button onClick={handleSubmit} className="submit bg-primary p-3 rounded-md text-white">
            Submit
          </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
