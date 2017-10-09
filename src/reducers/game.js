import {
  START_NEW_GAME,
  TAKE_TURN
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
      return Object.assign({}, state, {board: action.board, running: action.running});
    case TAKE_TURN:
      return Object.assign({}, state, {board: action.board, turn: action.turn});
    default:
      return state;
  }
}

export default game;