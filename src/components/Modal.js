import React from 'react';

const Modal = props => {
  console.log(props);
  return (
    <div className="mask">
      <div className="modal-panel">
        <h1>Modal!</h1>
      </div>
    </div>
  );
};

export default Modal;