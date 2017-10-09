export const START_NEW_GAME = 'START_NEW_GAME';
export const TAKE_TURN = 'TAKE_TURN';
export const DECLARE_DRAW = 'DECLARE_DRAW';
export const DECLARE_WINNER = 'DECLARE_WINNER';

export const startNewGame = () => {
  const newBoard = Array.from({length: 9}, item => '');
  return {
    type: START_NEW_GAME,
    board: newBoard,
    running: true
  }
}

export const takeTurn = (cell, player, board) => {
  const newBoard = board.map((item, index) => index === cell ? player : item);
  if (!board[cell]) {
    return {
      type: TAKE_TURN,
      board: newBoard,
      turn: player === 'X' ? 'O' : 'X'
    }
  }
}

export const declareDraw = () => {
  return {
    type: DECLARE_DRAW,
    draw: true,
    running: false
  }
}

export const declareWinner = (player) => {
  return {
    type: DECLARE_WINNER,
    winner: player,
    running: false
  }
}