import React from 'react';

const GameState = ({winner, draw}) => {
  if (winner) {
    return <p>{`Winner ${winner}`}</p>;
  } else if (draw) {
    return <p>It&apos;s a draw!</p>;
  }
}

export default GameState;