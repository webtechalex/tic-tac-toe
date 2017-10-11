import React from 'react';

const Modal = props => {
  const {winner, draw, running, startNewGame} = props;
  return (
    <div>
      {!running &&
        <div className="mask">
          <div className="modal-panel">
            {winner && <p>{`Winner ${winner}`}</p>}
            {draw && <p>It's a draw!</p>}
            <p>Start a new game...</p>
            <button onClick={startNewGame}>New Game</button>
          </div>
        </div>
      }
    </div>
  );
};

export default Modal;