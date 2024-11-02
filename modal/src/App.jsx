import React, { useState } from "react";
import Modal from "./Modal";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <button onClick={openModal} className="open-modal-button">
        Open Modal
      </button>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
}

export default App;
