import {expect} from 'chai';
import deepFreeze from 'deep-freeze';

import game from '../src/reducers';
import {takeTurn} from '../src/actions';

const initialState = {
  board: null,
  winner: '',
  draw: false,
  running: false,
  turn: 'X'
};

const runningState = {
  board: Array.from({length: 9}, item => ''),
  winner: '',
  draw: false,
  running: true,
  turn: 'X'
};

const populatedBoardState = {
  board: ['', '', 'X', 'X', 'O', '', '', 'O', ''],
  winner: '',
  draw: false,
  running: true,
  turn: 'O'
};

const drawnBoardState = {
  board: ['X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', 'X'],
  winner: '',
  draw: false,
  running: true,
  turn: 'O'
}

const wonBoardState = {
  board: ['X', 'X', 'O', 'O', 'X', 'O', '', '', 'X'],
  winner: '',
  draw: false,
  running: true,
  turn: 'O'
}

describe('Test environment', function() {
  it('should run a test', function(done) {
    expect(true).to.equal(true);
    done();
  });
});

describe('Test initial application state', function() {
  it('should generate the correct initial application state when reducer is first called', function(done) {
    expect(game()).to.eql(initialState);
    done();
  });
});

describe('Test initial game board state', function() {
  it('should generate an empty board when the game is started', function(done) {
    const newBoard = Array.from({length: 9}, item => '');
    const action = {
      type: 'START_NEW_GAME',
      board: newBoard,
      running: true
    };

    deepFreeze(action);

    expect(game(initialState, action)).to.eql(runningState);
    done();
  });
});

describe('Test board updating on each turn', function() {
  it('should update the board correctly after a player turn', function(done) {
    const newState = {
      board: ['', '', '', 'X', '', '', '', '', ''],
      winner: '',
      draw: false,
      running: true,
      turn: 'O'
    };

    expect(game(runningState, takeTurn(3, 'X', runningState.board)).board).to.eql(newState.board);
    done();
  });
  it('should not update the board if a populated cell is clicked', function(done) {
    expect(game(populatedBoardState, takeTurn(2, 'O', populatedBoardState.board))).to.equal(populatedBoardState);
    done();
  });
});

describe('Test game draw declaration', function() {
  it('returns draw: true and running: false when the board is complete with no winner', function(done) {
    const action = {
      type: 'DECLARE_DRAW',
      draw: true,
      running: false
    };
    const drawDeclaredState = Object.assign({}, drawnBoardState, {draw: true, running: false});
    expect(game(drawnBoardState, action)).to.eql(drawDeclaredState);
    done();
  });
});

describe('Test game win declaration', function() {
  it('returns a winner when one is detected', function(done) {
    const action = {
      type: 'DECLARE_WINNER',
      winner: 'X',
      running: false
    }
    const winDeclaredState = Object.assign({}, wonBoardState, {winner: 'X', running: false})
    expect(game(wonBoardState, action)).to.eql(winDeclaredState);
    done();
  });
});
