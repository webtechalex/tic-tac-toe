export const START_NEW_GAME = 'START_NEW_GAME';
export const TAKE_TURN = 'TAKE_TURN';

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