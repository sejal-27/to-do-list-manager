import React, { useState, useEffect } from "react";
import { taskData, deleteTask, editTask, taskDataLength } from "../TaskData";
import { IMAGES } from "../../../utils/constants";
import "../../TaskDetails/TaskDisplay/TaskDisplay.css";

const TaskDisplay = ({ updateTaskCount }) => {
  const [tasks, setTasks] = useState(taskData);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTask, setEditedTask] = useState("");
  const [completedTasks, setCompletedTasks] = useState(new Set());

  useEffect(() => {
    setTasks(taskData);
  }, [taskData]);

  const handleCheckboxChange = (index) => {
    setCompletedTasks((prevCompletedTasks) => {
      const updatedCompletedTasks = new Set(prevCompletedTasks);
      if (updatedCompletedTasks.has(index)) {
        updatedCompletedTasks.delete(index);
      } else {
        updatedCompletedTasks.add(index);
      }
      return updatedCompletedTasks;
    });
  };
  const handleDeleteTask = (index) => {
    deleteTask(index);
    const updatedCompletedTasks = new Set();
    for (let taskIndex of completedTasks) {
      if (taskIndex > index) {
        updatedCompletedTasks.add(taskIndex - 1);
      } else if (taskIndex !== index) {
        updatedCompletedTasks.add(taskIndex);
      }
    }

    setCompletedTasks(updatedCompletedTasks);
    setTasks([...taskData]);

    updateTaskCount(taskDataLength());
  };

  const handleEditTask = (index, updatedTask) => {
    const updatedTaskData = editTask(index, updatedTask);
    setTasks(updatedTaskData);
    setEditingIndex(null);
    setEditedTask("");
  };

  const handleSaveTask = (index) => {
    if (editedTask.trim() !== "") {
      handleEditTask(index, editedTask);
    }
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditedTask("");
  };

  return (
    <div className="w-full flex justify-center items-center ">
      <div className=" flex flex-col  p-3 rounded-sm" style={{ width: "70%" }}>
        {tasks.map((task, index) => (
          <div
            key={index}
            className=" flex w-full task-container justify-between p-4 gap-2"
          >
            {index === editingIndex ? (
              <>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                  className="w-full rounded-sm p-1"
                />
                {/* {console.log("editttt",editedTask)} */}
                <div className=" flex font-thin gap-1">
                  <button
                    className="bg-primary rounded-md p-2 text-white font-medium"
                    onClick={() => handleSaveTask(index)}
                  >
                    Save
                  </button>
                  <button
                    className=" rounded-md p-2 text-white cancelbtn font-medium"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3 w-full">
                  <input
                    type="checkbox"
                    checked={completedTasks.has(index)}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <span
                    className={
                      completedTasks.has(index)
                        ? "text-completed flex justify-between w-full ml-2 items-center"
                        : "task-content"
                    }
                  >
                    {completedTasks.has(index) ? (
                      <>
                      <div className="task-content">
                        {" "}
                     
                        {task}
                       {" "}
                        {" "}
                      </div>
                      <div className="completed p-1 pr-4 pl-4 rounded-2xl mr-8 ml-8">
                      COMPLETED
                    </div>
                    </>
                    ) : (
                      task
                    )}
                  </span>
                </div>
                <div className="flex gap-8">
                  <button onClick={() => setEditingIndex(index)}>
                    {" "}
                    <img
                      src={IMAGES.editTask}
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                      alt=""
                    />
                  </button>

                  <button onClick={() => handleDeleteTask(index)}>
                    {" "}
                    <img
                      src={IMAGES.deleteTask}
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                      alt=""
                    />{" "}
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskDisplay;
