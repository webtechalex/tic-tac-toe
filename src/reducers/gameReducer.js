import {
  START_NEW_GAME,
  TAKE_TURN,
  DECLARE_DRAW,
  DECLARE_WINNER
} from '../actions';

const initialState = {
  board: null,
  winner: '',
  draw: false,
  running: false,
  turn: 'X'
}

const game = (state = initialState, action) => {
  switch (action && action.type) {
    case START_NEW_GAME:
      return Object.assign({}, initialState, {board: action.board, running: action.running});
    case TAKE_TURN:
      return Object.assign({}, state, {board: action.board, turn: action.turn});
    case DECLARE_DRAW:
      return Object.assign({}, state, {draw: action.draw, running: action.running});
    case DECLARE_WINNER:
      return Object.assign({}, state, {winner: action.winner, running: action.running})
    default:
      return state;
  }
}

export default game;