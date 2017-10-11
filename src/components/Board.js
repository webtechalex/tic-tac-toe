import React from 'react';

import Cell from './Cell';

const Board = props => {
  const handleCellClick = (i) => props.takeTurn(i, props.turn, props.board);

  return (
    <div>
      {props.board &&
        <div className="board">
          {props.board.map((cell, i) => (
            <div className="cell" key={i} onClick={(e) => handleCellClick(i)}>
              {cell}
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default Board;