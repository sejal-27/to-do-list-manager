import React, { useState, useEffect } from "react";
import { taskData, deleteTask, editTask, taskDataLength } from "../TaskData";
import { IMAGES } from "../../../utils/constants";
import "../../TaskDetails/TaskDisplay/TaskDisplay.css";

const TaskDisplay = ({ updateTaskCount }) => {
  const [tasks, setTasks] = useState(taskData);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  const handleDeleteTask = (index) => {
    const updatedTaskData = deleteTask(index);
    console.log("Task deleted:", updatedTaskData);
    setTasks(updatedTaskData);
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

  useEffect(() => {
    setTasks(taskData);
  }, [taskData]);

  return (
    <div className="w-full flex justify-center items-center ">
      <div
        className=" flex flex-col  p-3 rounded-sm"
        style={{ width: "70%" }}
      >
        {tasks.map((task, index) => (
          <div key={index} className=" flex w-full task-container justify-between p-4 gap-2">
            {index === editingIndex ? (
              <>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                  className="w-full rounded-sm"
                />
                {/* {console.log("editttt",editedTask)} */}
                <div className=" flex font-thin gap-1">
                  <button
                    className="bg-primary rounded-md p-2 text-white"
                    onClick={() => handleSaveTask(index)}
                  >
                    Save
                  </button>
                  <button
                    className=" rounded-md p-2 text-white cancelbtn"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                {task}
                <div className="flex gap-2">
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
