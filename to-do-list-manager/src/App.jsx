import React,{useState} from "react";
import Header from "./reusables/Header";
import TaskModal from "./screens/TaskDetails/TaskModal/TaskModal";
import TaskDisplay from "./screens/TaskDetails/TaskDisplay/TaskDisplay";
import TaskCount from "./screens/TaskDetails/TaskCount/TaskCount";




function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const[taskCount,setTaskCount]=useState(0);
  const updateTaskCount = (count) => {
    setTaskCount(count);
  };
  return (
    <div >
      <Header />
      <TaskCount openModal={openModal} />
      <TaskModal isOpen={isModalOpen} onClose={closeModal} />

      <TaskDisplay updateTaskCount={updateTaskCount}/>
      
    </div>
  );
}

export default App;
