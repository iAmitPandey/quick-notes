import React from "react";
import "./Modal.css";

function Modal({ closeModal }) {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Modal Title</h2>
        <p>This is a simple modal popup.</p>
        <button onClick={closeModal} className="close-modal-button">
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
