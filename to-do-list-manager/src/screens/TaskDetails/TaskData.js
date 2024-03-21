let taskData = [];
export const AddTasks = (newTasks) => {
  taskData = [...taskData, ...newTasks];
  console.log(taskData, "84fgjhfj5");
  return taskData;
};

export const deleteTask = (index) => {
  if (index < 0 || index >= taskData.length) {
    console.error("Invalid index");
    return taskData;
  }

  const updatedTaskData = [
    ...taskData.slice(0, index),
    ...taskData.slice(index + 1),
  ];
  taskData = updatedTaskData;
  return updatedTaskData;
};

const editTask = (index, updatedTask) => {
  taskData[index] = updatedTask;
  return taskData;
};

export const taskDataLength = () => {
  return taskData.length;
};
export { taskData, editTask };

export default AddTasks;
