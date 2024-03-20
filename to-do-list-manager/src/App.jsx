import React from "react";
import Header from "./reusables/Header";
import taskData from "./screens/TaskDetails/TaskData";
import TaskCount from "./screens/TaskDetails/TaskCount/TaskCount";


function App() {
  return (
    <div >
      <Header />
      <TaskCount taskCount={taskData} />
    </div>
  );
}

export default App;
