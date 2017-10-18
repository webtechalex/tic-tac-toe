import React from 'react';

import GameState from './GameState';

const Modal = props => {
  const {winner, draw, running, startNewGame} = props;

  return (running) ? null : (
    <div className="mask">
      <div className="modal-panel">
        {GameState({winner, draw})}
        <p>Start a new game...</p>
        <button onClick={startNewGame}>New Game</button>
      </div>
    </div>
  );
};

export default Modal;