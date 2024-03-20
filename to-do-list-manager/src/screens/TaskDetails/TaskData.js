let taskData = [];

export const addTasks = (newTasks) => {
    taskData = [...taskData, ...newTasks];

    
  };
  console.log("taskdata", taskData);

export default taskData;
