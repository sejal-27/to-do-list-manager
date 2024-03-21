import React,{useState} from "react";
import Header from "./reusables/Header";
import TaskModal from "./screens/TaskDetails/TaskModal/TaskModal";

import TaskCount from "./screens/TaskDetails/TaskCount/TaskCount";


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div >
      <Header />
      <TaskCount openModal={openModal} />
      <TaskModal isOpen={isModalOpen} onClose={closeModal} />
      
    </div>
  );
}

export default App;
