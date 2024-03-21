let taskData = [];
const AddTasks = (newTasks) => {
  taskData = [...taskData, ...newTasks];
  console.log(taskData, "84fgjhfj5");
  return taskData;
};

export const taskDataLength = () => {
  
  return taskData.length;
};

export default AddTasks;
